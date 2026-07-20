// If one day you ever decide to replace jose, you'll only modify one file 
// 
// ✅ Install jose

// ⬜ Create utils/jwt.js

// ⬜ Login Service

// ⬜ Auth Middleware

// ⬜ /me

// ⬜ Refresh Token API

// ⬜ Logout

// ⬜ Protect Routes(utils/jwt.js)

import { SignJWT, jwtVerify } from "jose";

const encoder = new TextEncoder();

function getAccessSecret(env) {
  return encoder.encode(env.JWT_ACCESS_SECRET);
}

function getRefreshSecret(env) {
  return encoder.encode(env.JWT_REFRESH_SECRET);
}

export async function generateAccessToken(env, payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(env.ACCESS_TOKEN_EXPIRES_IN || "15m")
    .sign(getAccessSecret(env));
}

export async function generateRefreshToken(env, payload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime(env.REFRESH_TOKEN_EXPIRES_IN || "30d")
    .sign(getRefreshSecret(env));
}

export async function verifyAccessToken(env, token) {
  const { payload } = await jwtVerify(
    token,
    getAccessSecret(env)
  );

  return payload;
}

export async function verifyRefreshToken(env, token) {
  const { payload } = await jwtVerify(
    token,
    getRefreshSecret(env)
  );

  return payload;
}