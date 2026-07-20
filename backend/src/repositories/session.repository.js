// Why?

// The repository is the only layer that should know SQL. Services call repository methods; repositories talk to D1.

import { getDatabase } from "../providers/database.provider";

export async function createSession(env, sessionData) {
  const db = getDatabase(env);

  const id = crypto.randomUUID();

  await db.prepare(
    `INSERT INTO sessions (
      id,
      user_id,
      refresh_token_hash,
      expires_at,
      created_at,
      updated_at,
      last_used_at,
      revoked_at,
      user_agent,
      ip_address
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
  )
  .bind(
    id,
    sessionData.userId,
    sessionData.refreshTokenHash,
    sessionData.expiresAt,
    sessionData.createdAt,
    sessionData.updatedAt,
    sessionData.lastUsedAt ?? null,
    sessionData.revokedAt ?? null,
    sessionData.userAgent ?? null,
    sessionData.ipAddress ?? null
  )
  .run();

  return { id, ...sessionData };
}

export async function findSessionByRefreshHash(env, refreshTokenHash) {
  const db = getDatabase(env);

  return await db.prepare(
    `SELECT *
     FROM sessions
     WHERE refresh_token_hash = ?
     LIMIT 1`
  )
  .bind(refreshTokenHash)
  .first();
}

export async function updateSession(env, id, updates) {
  const db = getDatabase(env);

  const fields = Object.keys(updates);

  if (!fields.length) return;

  const values = Object.values(updates);

  const setClause = fields
    .map(field => `${field} = ?`)
    .join(", ");

  await db.prepare(
    `UPDATE sessions
     SET ${setClause}
     WHERE id = ?`
  )
  .bind(...values, id)
  .run();
}

export async function revokeSession(env, id) {
  const db = getDatabase(env);

  await db.prepare(
    `UPDATE sessions
     SET revoked_at = ?, updated_at = ?
     WHERE id = ?`
  )
  .bind(
    new Date().toISOString(),
    new Date().toISOString(),
    id
  )
  .run();
}

export async function revokeAllUserSessions(env, userId) {
  const db = getDatabase(env);

  const now = new Date().toISOString();

  await db.prepare(
    `UPDATE sessions
     SET revoked_at = ?, updated_at = ?
     WHERE user_id = ?`
  )
  .bind(now, now, userId)
  .run();
}

export async function deleteExpiredSessions(env) {
  const db = getDatabase(env);

  await db.prepare(
    `DELETE FROM sessions
     WHERE expires_at <= ?`
  )
  .bind(new Date().toISOString())
  .run();
}