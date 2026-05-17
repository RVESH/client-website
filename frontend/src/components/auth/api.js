// ================================================================
// src/config/api.js
// ================================================================
// .env mein set karo:
//   REACT_APP_API_URL=http://127.0.0.1:8787      (local)
//   REACT_APP_API_URL=https://xyz.workers.dev    (production)
// ================================================================

const BASE = process.env.REACT_APP_API_URL || "http://127.0.0.1:8787";

/** Core fetch wrapper — token + CORS automatically handle hota hai */
export async function apiFetch(path, { method = "GET", body, token } = {}) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    credentials: "include",
    body: body ? JSON.stringify(body) : undefined,
  });

  let data = {};
  try { data = await res.json(); } catch {}
  if (!res.ok) throw new Error(data.error || `Error ${res.status}`);
  return data;
}

// ── Named API calls — import karo jahan chahiye ──────────────────

export const signupUser       = (name, email, password) =>
  apiFetch("/signup", { method:"POST", body:{ name, email, password } });

export const loginUser        = (email, password) =>
  apiFetch("/login", { method:"POST", body:{ email, password } });

export const logoutUser       = (token) =>
  apiFetch("/logout", { method:"POST", token });

export const getMe            = (token) =>
  apiFetch("/me", { token });

export const updateProfile    = (token, body) =>
  apiFetch("/update-profile", { method:"PUT", token, body });

export const changePassword   = (token, oldPassword, newPassword) =>
  apiFetch("/change-password", { method:"PUT", token, body:{ oldPassword, newPassword } });

export const forgotPassword   = (email) =>
  apiFetch("/forgot-password", { method:"POST", body:{ email } });

export const resetPassword    = (token, newPassword) =>
  apiFetch("/reset-password", { method:"POST", body:{ token, newPassword } });

export const adminGetUsers    = (token, page=1, limit=50) =>
  apiFetch(`/admin/users?page=${page}&limit=${limit}`, { token });

export const adminToggleBlock = (token, id) =>
  apiFetch(`/admin/block/${id}`, { method:"PUT", token });

export const adminDeleteUser  = (token, id) =>
  apiFetch(`/admin/user/${id}`, { method:"DELETE", token });