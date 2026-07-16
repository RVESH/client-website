import { randomUUID } from "node:crypto";
import { getDatabase } from "../providers/database.provider";

export async function createOtp(env, otpData) {
    const db = getDatabase(env);

    const id = randomUUID();

    await db.prepare(`
        INSERT INTO otps (
            id,
            email,
            otp,
            purpose,
            verified,
            created_at,
            expires_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `)
    .bind(
        id,
        otpData.email,
        otpData.otp,
        otpData.purpose,
        otpData.verified ? 1 : 0,
        otpData.createdAt.toISOString(),
        otpData.expiresAt.toISOString()
    )
    .run();

    return {
        id,
        ...otpData,
    };
}

export async function findOtp(env, filter) {
    const db = getDatabase(env);

    return await db.prepare(`
        SELECT *
        FROM otps
        WHERE email = ?
          AND purpose = ?
        LIMIT 1
    `)
    .bind(
        filter.email,
        filter.purpose
    )
    .first();
}

export async function updateOtp(env, id, updates) {
    const db = getDatabase(env);

    const fields = Object.keys(updates);
    const values = Object.values(updates);

    const setClause = fields
        .map(field => `${field} = ?`)
        .join(", ");

    await db.prepare(`
        UPDATE otps
        SET ${setClause}
        WHERE id = ?
    `)
    .bind(...values, id)
    .run();
}

export async function deleteOtp(env, filter) {
    const db = getDatabase(env);

    await db.prepare(`
        DELETE FROM otps
        WHERE id = ?
    `)
    .bind(filter.id)
    .run();
}

export async function deleteOtps(env, filter) {
    const db = getDatabase(env);

    await db.prepare(`
        DELETE FROM otps
        WHERE email = ?
          AND purpose = ?
    `)
    .bind(
        filter.email,
        filter.purpose
    )
    .run();
}