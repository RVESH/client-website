// src/services/auth/logout.service.js

// Why?

// After logout, the refresh token should never be accepted again.
// JWTs cannot be "logged out."
//  We revoke the session stored in D1 
// so the refresh token becomes unusable.

import {
  findSessionByRefreshHash,
  revokeSession,
} from "../../repositories/session.repository.js";

import { hashToken } from "../../utils/token.js";

import UnauthorizedError from "../../errors/UnauthorizedError.js";

export async function logoutService(env, refreshToken) {
  const refreshTokenHash = await hashToken(refreshToken);

  const session = await findSessionByRefreshHash(
    env,
    refreshTokenHash
  );

  if (!session) {
    throw new UnauthorizedError("Invalid session.");
  }

  if (session.revoked_at) {
    throw new UnauthorizedError("Session already revoked.");
  }

  await revokeSession(env, session.id);

  return {
    success: true,
    message: "Logged out successfully.",
  };
}