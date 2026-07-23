// This implements Refresh Token Rotation,
//  which is the industry standard. 
// Every refresh invalidates the old refresh token and replaces 
// it with a new one.
// means Old refresh token becomes invalid immediately after use.
 


// What?
// Issue new access + refresh tokens using a valid refresh token.

import {
  findSessionByRefreshHash,
  updateSession,
} from "../../repositories/session.repository.js";

import {
  verifyRefreshToken,
  generateAccessToken,
  generateRefreshToken,
} from "../../utils/jwt.js";
import { getRefreshTokenExpiry } from "../../utils/date.js";
import { hashToken } from "../../utils/token.js";

import UnauthorizedError from "../../errors/UnauthorizedError";

export async function refreshTokenService(env, refreshToken) {

let payload;
try {
  payload = await verifyRefreshToken(env, refreshToken);
} catch {
  throw new UnauthorizedError("Invalid or expired refresh token.");
}

  const currentHash = await hashToken(refreshToken);

  const session = await findSessionByRefreshHash(
    env,
    currentHash
  );

  if (!session) {
    throw new UnauthorizedError("Invalid refresh token.");
  }

  if (session.revoked_at) {
    throw new UnauthorizedError("Session revoked.");
  }

  if (new Date(session.expires_at) <= new Date()) {
    throw new UnauthorizedError("Refresh token expired.");
  }

  const newPayload = {
    sub: payload.sub,
    email: payload.email,
  };

  const accessToken = await generateAccessToken(
    env,
    newPayload
  );

  const newRefreshToken = await generateRefreshToken(
    env,
    newPayload
  );

await updateSession(env, session.id, {
  refresh_token_hash: await hashToken(newRefreshToken),
  expires_at: getRefreshTokenExpiry(env),
  updated_at: new Date().toISOString(),
  last_used_at: new Date().toISOString(),
});

  return {
    accessToken,
    refreshToken: newRefreshToken,
  };
}