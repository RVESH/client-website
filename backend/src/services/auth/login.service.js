// Production login.service.js

// This service should only:

// Find user
// Verify password
// Check email verification
// Generate Access Token
// Generate Refresh Token
// Return user + tokens

// It must not:

// Set cookies
// Touch HTTP response
// Know about Hono     


import { findUserByEmail } from "../../repositories/user.repository";
import { createSession } from "../../repositories/session.repository";
import { verifyPassword } from "../../utils/password.js";
import { hashToken } from "../../utils/token.js";
import { getRefreshTokenExpiry } from "../../utils/date.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.js";
import UnauthorizedError from "../../errors/UnauthorizedError";

export async function loginService(env, email, password, metadata = {}) {
const normalizedEmail = email.trim().toLowerCase();

const user = await findUserByEmail(env, normalizedEmail);

  if (!user) {
    throw new UnauthorizedError("Invalid email or password.");
  }

  const passwordValid = await verifyPassword(
    password,
    user.password,
    user.password_salt
  );

  if (!passwordValid) {
    throw new UnauthorizedError("Invalid email or password.");
  }

  if (!user.email_verified) {
    throw new UnauthorizedError(
      "Please verify your email before logging in."
    );
  }
  if (user.status !== "active") {
    throw new UnauthorizedError(
        "Your account is not active."
    );
}

  const payload = {
    sub: user.id,
    email: user.email,
  };

  const accessToken = await generateAccessToken(env, payload);
  const refreshToken = await generateRefreshToken(env, payload);

  await createSession(env, {
    userId: user.id,
    refreshTokenHash: await hashToken(refreshToken),
expiresAt: getRefreshTokenExpiry(env),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    lastUsedAt: new Date().toISOString(),
    userAgent: metadata.userAgent ?? null,
    ipAddress: metadata.ipAddress ?? null,
  });

  return {
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      emailVerified: Boolean(user.email_verified),
      status: user.status,
    },
    accessToken,
    refreshToken,
  };
}