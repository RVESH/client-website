import { getDatabase } from "../providers/.......ifmongodb.provider";

const COLLECTION_NAME = "otps";

export async function createOtp(env, otpData) {
    const db = await getDatabase(env);

    const result = await db.collection(COLLECTION_NAME).insertOne(otpData);

    return {
        _id: result.insertedId,
        ...otpData,
    };
}

export async function findOtp(env, filter) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).findOne(filter);
}

export async function updateOtp(env, filter, update) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).updateOne(filter, {
        $set: update,
    });
}

export async function deleteOtp(env, filter) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).deleteOne(filter);
}

export async function deleteOtps(env, filter) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).deleteMany(filter);
}