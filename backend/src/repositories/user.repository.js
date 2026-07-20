import { getDatabase } from "../providers/database.provider";

export async function findUserByEmail(env, email) {
    const db = getDatabase(env);

    const { results } = await db
        .prepare(
            `SELECT * FROM users
             WHERE email = ?
             LIMIT 1`
        )
        .bind(email.toLowerCase())
        .all();

    return results[0] ?? null;
}

export async function findUserById(env, id) {
    const db = getDatabase(env);

    return await db
        .prepare(
            `SELECT * FROM users
             WHERE id = ?
             LIMIT 1`
        )
        .bind(id)
        .first();
}

export async function createUser(env, userData) {
    const db = getDatabase(env);

    const id = crypto.randomUUID();

    await db.prepare(
        `INSERT INTO users (
            id,
            name,
            email,
            password,
            password_salt,
            email_verified,
            created_at,
            updated_at
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)`
    )
    .bind(
        id,
        userData.name,
        userData.email,
        userData.password,
        userData.passwordSalt,
        0,
        userData.createdAt.toISOString(),
        userData.updatedAt.toISOString()
    )
    .run();

    return {
        id,
        ...userData,
    };
}

export async function updateUser(env, id, updates) {
    const db = getDatabase(env);

    const fields = Object.keys(updates);

    const values = Object.values(updates);

    const setClause = fields
        .map(field => `${field} = ?`)
        .join(", ");

    await db
        .prepare(
            `UPDATE users
             SET ${setClause}
             WHERE id = ?`
        )
        .bind(...values, id)
        .run();
}

export async function deleteUser(env, id) {
    const db = getDatabase(env);

    await db
        .prepare(
            `DELETE FROM users
             WHERE id = ?`
        )
        .bind(id)
        .run();
}