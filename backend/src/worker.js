/**
 * ================================================================
 * worker.js — Cloudflare Workers Auth Backend
 * ================================================================
 * WHY NOT bcryptjs / jsonwebtoken:
 *   Those are Node.js packages. Cloudflare Workers run in a V8
 *   isolate — no Node.js APIs. They will throw at runtime.
 *
 * WHAT WE USE INSTEAD:
 *   - PBKDF2 (Web Crypto API) → same security as bcrypt
 *   - HS256 JWT (Web Crypto API) → same as jsonwebtoken output
 *   - D1 (SQLite) → database
 *   - Manual routing → no itty-router needed
 *
 * ROUTES:
 *   POST   /signup
 *   POST   /login
 *   POST   /logout
 *   GET    /me
 *   PUT    /update-profile
 *   PUT    /change-password
 *   POST   /forgot-password
 *   POST   /reset-password
 *   GET    /admin/users
 *   PUT    /admin/block/:id
 *   DELETE /admin/user/:id
 * ================================================================
 */

const COOKIE_NAME     = "auth_token";
const JWT_EXPIRY_SECS = 7 * 24 * 60 * 60;  // 7 days
const PBKDF2_ITERS    = 100_000;

// ── CORS ─────────────────────────────────────────────────────────
function corsHeaders(request) {
  const origin = request?.headers?.get("Origin") || "*";
  return {
    "Access-Control-Allow-Origin":      origin,
    "Access-Control-Allow-Methods":     "GET, POST, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers":     "Content-Type, Authorization",
    "Access-Control-Allow-Credentials": "true",
    "Vary": "Origin",
  };
}

// ── Entry point ───────────────────────────────────────────────────
export default {
  async fetch(request, env) {

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: corsHeaders(request) });
    }

    const { pathname } = new URL(request.url);
    const m = request.method;

    try {
      if (m === "POST"   && pathname === "/signup")           return handleSignup(request, env);
      if (m === "POST"   && pathname === "/login")            return handleLogin(request, env);
      if (m === "POST"   && pathname === "/logout")           return handleLogout(request);
      if (m === "GET"    && pathname === "/me")               return handleMe(request, env);
      if (m === "PUT"    && pathname === "/update-profile")   return handleUpdateProfile(request, env);
      if (m === "PUT"    && pathname === "/change-password")  return handleChangePassword(request, env);
      if (m === "POST"   && pathname === "/forgot-password")  return handleForgotPassword(request, env);
      if (m === "POST"   && pathname === "/reset-password")   return handleResetPassword(request, env);
      if (m === "GET"    && pathname === "/admin/users")      return handleAdminListUsers(request, env);
      if (m === "PUT"    && pathname.startsWith("/admin/block/"))  return handleAdminBlock(request, env, pathname);
      if (m === "DELETE" && pathname.startsWith("/admin/user/"))   return handleAdminDelete(request, env, pathname);

      return res({ error: "Not found" }, 404, request);
    } catch (err) {
      console.error("Worker error:", err.message);
      return res({ error: "Internal server error" }, 500, request);
    }
  },
};

// ================================================================
// ROUTE HANDLERS
// ================================================================

async function handleSignup(request, env) {
  const body = await readJson(request);
  if (!body) return res({ error: "Invalid JSON body" }, 400, request);

  const { name, email, password } = body;

  if (!name || name.trim().length < 2)
    return res({ error: "Name must be at least 2 characters" }, 400, request);
  if (!email || !isValidEmail(email))
    return res({ error: "Invalid email address" }, 400, request);
  if (!password || password.length < 8)
    return res({ error: "Password must be at least 8 characters" }, 400, request);
  if (!/\d/.test(password))
    return res({ error: "Password must contain at least one number" }, 400, request);

  const existing = await env.DB
    .prepare("SELECT id FROM users WHERE email = ?")
    .bind(email.toLowerCase().trim())
    .first();
  if (existing) return res({ error: "Email already registered" }, 409, request);

  const passwordHash = await hashPassword(password);

  const result = await env.DB.prepare(
    `INSERT INTO users (name, email, password_hash, is_verified, is_admin, is_blocked)
     VALUES (?, ?, ?, 0, 0, 0)`
  ).bind(name.trim(), email.toLowerCase().trim(), passwordHash).run();

  const userId = result.meta.last_row_id;

  const token = await signJWT(
    { sub: userId, email: email.toLowerCase(), is_admin: false },
    env.JWT_SECRET
  );

  const user = {
    id: userId,
    name: name.trim(),
    email: email.toLowerCase().trim(),
    is_admin: false,
    is_verified: false,
    is_blocked: false,
    created_at: new Date().toISOString(),
  };

  return res({ message: "Account created", user, token }, 201, request, {
    "Set-Cookie": makeCookie(token),
  });
}

async function handleLogin(request, env) {
  const body = await readJson(request);
  if (!body) return res({ error: "Invalid JSON body" }, 400, request);

  const { email, password } = body;
  if (!email || !password)
    return res({ error: "Email and password are required" }, 400, request);

  const user = await env.DB
    .prepare("SELECT * FROM users WHERE email = ?")
    .bind(email.toLowerCase().trim())
    .first();

  if (!user)
    return res({ error: "Invalid email or password" }, 401, request);
  if (user.is_blocked)
    return res({ error: "Your account has been suspended" }, 403, request);

  const valid = await verifyPassword(password, user.password_hash);
  if (!valid)
    return res({ error: "Invalid email or password" }, 401, request);

  const token = await signJWT(
    { sub: user.id, email: user.email, is_admin: !!user.is_admin },
    env.JWT_SECRET
  );

  return res({ message: "Logged in", user: sanitize(user), token }, 200, request, {
    "Set-Cookie": makeCookie(token),
  });
}

function handleLogout(request) {
  return res({ message: "Logged out" }, 200, request, {
    "Set-Cookie": `${COOKIE_NAME}=; HttpOnly; Secure; SameSite=None; Max-Age=0; Path=/`,
  });
}

async function handleMe(request, env) {
  const payload = await requireAuth(request, env);
  if (payload instanceof Response) return payload;

  const user = await env.DB
    .prepare("SELECT * FROM users WHERE id = ?")
    .bind(payload.sub)
    .first();

  if (!user)           return res({ error: "User not found" }, 404, request);
  if (user.is_blocked) return res({ error: "Account suspended" }, 403, request);

  return res({ user: sanitize(user) }, 200, request);
}

async function handleUpdateProfile(request, env) {
  const payload = await requireAuth(request, env);
  if (payload instanceof Response) return payload;

  const body = await readJson(request);
  if (!body) return res({ error: "Invalid JSON" }, 400, request);

  const { name, email } = body;
  const sets = [], vals = [];

  if (name !== undefined) {
    if (!name.trim()) return res({ error: "Name cannot be empty" }, 400, request);
    sets.push("name = ?"); vals.push(name.trim());
  }
  if (email !== undefined) {
    if (!isValidEmail(email)) return res({ error: "Invalid email" }, 400, request);
    const conflict = await env.DB
      .prepare("SELECT id FROM users WHERE email = ? AND id != ?")
      .bind(email.toLowerCase().trim(), payload.sub)
      .first();
    if (conflict) return res({ error: "Email already in use" }, 409, request);
    sets.push("email = ?"); vals.push(email.toLowerCase().trim());
  }

  if (!sets.length) return res({ error: "Nothing to update" }, 400, request);
  sets.push("updated_at = datetime('now')");
  vals.push(payload.sub);

  await env.DB.prepare(
    `UPDATE users SET ${sets.join(", ")} WHERE id = ?`
  ).bind(...vals).run();

  const user = await env.DB
    .prepare("SELECT * FROM users WHERE id = ?")
    .bind(payload.sub)
    .first();

  return res({ message: "Profile updated", user: sanitize(user) }, 200, request);
}

async function handleChangePassword(request, env) {
  const payload = await requireAuth(request, env);
  if (payload instanceof Response) return payload;

  const body = await readJson(request);
  if (!body) return res({ error: "Invalid JSON" }, 400, request);

  const { oldPassword, newPassword } = body;
  if (!oldPassword || !newPassword)
    return res({ error: "Both old and new password required" }, 400, request);
  if (newPassword.length < 8)
    return res({ error: "New password must be at least 8 characters" }, 400, request);
  if (!/\d/.test(newPassword))
    return res({ error: "New password must contain a number" }, 400, request);

  const user = await env.DB
    .prepare("SELECT * FROM users WHERE id = ?")
    .bind(payload.sub)
    .first();
  if (!user) return res({ error: "User not found" }, 404, request);

  const valid = await verifyPassword(oldPassword, user.password_hash);
  if (!valid) return res({ error: "Current password is incorrect" }, 401, request);

  const newHash = await hashPassword(newPassword);
  await env.DB.prepare(
    "UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?"
  ).bind(newHash, payload.sub).run();

  return res({ message: "Password changed successfully" }, 200, request);
}

async function handleForgotPassword(request, env) {
  const body = await readJson(request);
  const ok   = res({ message: "If that email exists, a reset link was sent." }, 200, request);
  if (!body || !body.email) return ok;

  const user = await env.DB
    .prepare("SELECT id FROM users WHERE email = ?")
    .bind(body.email.toLowerCase().trim())
    .first();
  if (!user) return ok;

  await env.DB.prepare("DELETE FROM password_reset_tokens WHERE user_id = ?")
    .bind(user.id).run();

  const token     = randomHex(32);
  const expiresAt = new Date(Date.now() + 3_600_000).toISOString();

  await env.DB.prepare(
    "INSERT INTO password_reset_tokens (user_id, token, expires_at) VALUES (?, ?, ?)"
  ).bind(user.id, token, expiresAt).run();

  // TODO: Send email with token using Resend/Mailgun
  // console.log(`[DEV] Password reset token for ${body.email}: ${token}`);
  await sendResetEmail(body.email, token, env);
  return ok;
}
async function sendResetEmail(email, token, env) {
  const resetLink = `${env.FRONTEND_URL}/#/reset-password?token=${token}`;
  await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": env.BREVO_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: "Rishabh Portfolio", email: "rishabh.gaurav.verma@gmail.com" },
      to: [{ email: email }],
      subject: "Reset your password",
      htmlContent: `<div style="font-family:sans-serif;max-width:400px;margin:0 auto">
        <h2 style="color:#6c63ff">Reset your password</h2>
        <p>Click below to reset. Valid for 1 hour.</p>
        <a href="${resetLink}" style="display:inline-block;background:#6c63ff;color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;font-weight:bold">
          Reset Password →
        </a>
        <p style="color:#888;font-size:12px;margin-top:24px">Ignore if you didn't request this.</p>
      </div>`,
    }),
  });
}
async function handleResetPassword(request, env) {
  const body = await readJson(request);
  if (!body) return res({ error: "Invalid JSON" }, 400, request);

  const { token, newPassword } = body;
  if (!token || !newPassword)
    return res({ error: "Token and new password required" }, 400, request);
  if (newPassword.length < 8)
    return res({ error: "Password must be at least 8 characters" }, 400, request);

  const record = await env.DB
    .prepare("SELECT * FROM password_reset_tokens WHERE token = ?")
    .bind(token).first();

  if (!record)
    return res({ error: "Invalid or expired token" }, 400, request);
  if (new Date(record.expires_at) < new Date())
    return res({ error: "Token has expired. Request a new reset link." }, 400, request);

  const newHash = await hashPassword(newPassword);
  await env.DB.prepare(
    "UPDATE users SET password_hash = ?, updated_at = datetime('now') WHERE id = ?"
  ).bind(newHash, record.user_id).run();

  await env.DB.prepare("DELETE FROM password_reset_tokens WHERE id = ?")
    .bind(record.id).run();

  return res({ message: "Password reset. You can now log in." }, 200, request);
}

async function handleAdminListUsers(request, env) {
  const payload = await requireAdmin(request, env);
  if (payload instanceof Response) return payload;

  const url    = new URL(request.url);
  const page   = Math.max(1, parseInt(url.searchParams.get("page")  || "1"));
  const limit  = Math.min(100, parseInt(url.searchParams.get("limit") || "50"));
  const offset = (page - 1) * limit;

  const { results } = await env.DB.prepare(
    `SELECT id, name, email, is_admin, is_blocked, is_verified, created_at
     FROM users ORDER BY created_at DESC LIMIT ? OFFSET ?`
  ).bind(limit, offset).all();

  const count = await env.DB
    .prepare("SELECT COUNT(*) as total FROM users")
    .first();

  return res({ users: results, total: count.total, page, limit }, 200, request);
}

async function handleAdminBlock(request, env, pathname) {
  const payload = await requireAdmin(request, env);
  if (payload instanceof Response) return payload;

  const id = parseInt(pathname.split("/").pop());
  if (!id || isNaN(id)) return res({ error: "Invalid user ID" }, 400, request);
  if (id === payload.sub) return res({ error: "Cannot block yourself" }, 400, request);

  const user = await env.DB
    .prepare("SELECT id, is_blocked FROM users WHERE id = ?")
    .bind(id).first();
  if (!user) return res({ error: "User not found" }, 404, request);

  const newState = user.is_blocked ? 0 : 1;
  await env.DB.prepare(
    "UPDATE users SET is_blocked = ?, updated_at = datetime('now') WHERE id = ?"
  ).bind(newState, id).run();

  return res({ message: newState ? "User blocked" : "User unblocked", is_blocked: !!newState }, 200, request);
}

async function handleAdminDelete(request, env, pathname) {
  const payload = await requireAdmin(request, env);
  if (payload instanceof Response) return payload;

  const id = parseInt(pathname.split("/").pop());
  if (!id || isNaN(id)) return res({ error: "Invalid user ID" }, 400, request);
  if (id === payload.sub) return res({ error: "Cannot delete yourself" }, 400, request);

  const user = await env.DB
    .prepare("SELECT id FROM users WHERE id = ?")
    .bind(id).first();
  if (!user) return res({ error: "User not found" }, 404, request);

  await env.DB.prepare("DELETE FROM users WHERE id = ?").bind(id).run();
  return res({ message: "User deleted" }, 200, request);
}


// ================================================================
// AUTH
// ================================================================

async function requireAuth(request, env) {
  const token = getToken(request);
  if (!token) return res({ error: "Authentication required. Please log in." }, 401, request);
  try {
    return await verifyJWT(token, env.JWT_SECRET);
  } catch {
    return res({ error: "Session expired. Please log in again." }, 401, request);
  }
}

async function requireAdmin(request, env) {
  const payload = await requireAuth(request, env);
  if (payload instanceof Response) return payload;
  if (!payload.is_admin) return res({ error: "Admin access required" }, 403, request);
  return payload;
}


function getToken(request) {
  // Try Authorization header first
  const auth = request.headers.get("Authorization") || "";
  if (auth.startsWith("Bearer ")) return auth.slice(7).trim();

  // Try cookie
  const cookie = request.headers.get("Cookie") || "";
  const match  = cookie.match(new RegExp(`(?:^|;\\s*)${COOKIE_NAME}=([^;]+)`));
  return match ? match[1] : null;
}

// ================================================================
// JWT  (HS256 via Web Crypto)
// ================================================================

async function signJWT(payload, secret) {
  const h = b64u(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const p = b64u(JSON.stringify({
    ...payload,
    iat: now(),
    exp: now() + JWT_EXPIRY_SECS,
  }));
  const key = await hmacKey(secret);
  const sig = await crypto.subtle.sign("HMAC", key, te(`${h}.${p}`));
  return `${h}.${p}.${b64uBuf(sig)}`;
}

async function verifyJWT(token, secret) {
  const parts = token.split(".");
  if (parts.length !== 3) throw new Error("Bad token format");
  const [h, p, s] = parts;

  const key  = await hmacKey(secret);
  const good = await crypto.subtle.sign("HMAC", key, te(`${h}.${p}`));
  const recv = b64uDec(s);

  if (good.byteLength !== recv.byteLength) throw new Error("Sig mismatch");
  const ga = new Uint8Array(good), ra = new Uint8Array(recv);
  let diff = 0;
  for (let i = 0; i < ga.length; i++) diff |= ga[i] ^ ra[i];
  if (diff !== 0) throw new Error("Sig mismatch");

  const claims = JSON.parse(atob(p.replace(/-/g, "+").replace(/_/g, "/")));
  if (claims.exp < now()) throw new Error("Token expired");
  return claims;
}

async function hmacKey(secret) {
  return crypto.subtle.importKey(
    "raw", te(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign", "verify"]
  );
}

// ================================================================
// PASSWORD  (PBKDF2 via Web Crypto)
// ================================================================

async function hashPassword(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const key  = await crypto.subtle.importKey("raw", te(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITERS, hash: "SHA-256" }, key, 256
  );
  return `${toHex(salt)}:${toHex(bits)}`;
}

async function verifyPassword(password, stored) {
  const [saltHex, hashHex] = stored.split(":");
  if (!saltHex || !hashHex) return false;
  const salt = fromHex(saltHex);
  const key  = await crypto.subtle.importKey("raw", te(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: PBKDF2_ITERS, hash: "SHA-256" }, key, 256
  );
  return toHex(bits) === hashHex;
}

// ================================================================
// UTILITIES
// ================================================================

function res(data, status = 200, request, extra = {}) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders(request),
      ...extra,
    },
  });
}

async function readJson(request) {
  try { return await request.json(); } catch { return null; }
}

function sanitize({ password_hash, ...user }) { return user; }

function makeCookie(token) {
  return `${COOKIE_NAME}=${token}; HttpOnly; Secure; SameSite=None; Path=/; Max-Age=${JWT_EXPIRY_SECS}`;
}

function isValidEmail(e) { return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e); }

function randomHex(n) { return toHex(crypto.getRandomValues(new Uint8Array(n))); }

function now() { return Math.floor(Date.now() / 1000); }

const te       = (s)   => new TextEncoder().encode(s);
const toHex    = (buf) => Array.from(new Uint8Array(buf)).map(b => b.toString(16).padStart(2,"0")).join("");
const fromHex  = (s)   => { const b = new Uint8Array(s.length/2); for(let i=0;i<b.length;i++) b[i]=parseInt(s.slice(i*2,i*2+2),16); return b; };
const b64u     = (s)   => btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,"");
const b64uBuf  = (buf) => { let s=""; new Uint8Array(buf).forEach(b=>s+=String.fromCharCode(b)); return btoa(s).replace(/\+/g,"-").replace(/\//g,"_").replace(/=/g,""); };
const b64uDec  = (s)   => { const b64=s.replace(/-/g,"+").replace(/_/g,"/"); const r=atob(b64); const buf=new Uint8Array(r.length); for(let i=0;i<r.length;i++) buf[i]=r.charCodeAt(i); return buf.buffer; };