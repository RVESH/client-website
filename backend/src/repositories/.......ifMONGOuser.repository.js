import { getDatabase } from "../providers/.......ifmongodb.provider";

const COLLECTION_NAME = "users";

export async function findUserByEmail(env, email) {
    // console.log("Repository: findUserByEmail");

    const db = await getDatabase(env);

    // console.log("Database connected");


    


    const user = await db.collection(COLLECTION_NAME).findOne({
  email: email.toLowerCase(),
});

// console.log("findOne result:", user);

return user;

}


export async function findUserById(env, userId) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).findOne({
        _id: userId,
    });
}

export async function createUser(env, userData) {
    const db = await getDatabase(env);

    const result = await db.collection(COLLECTION_NAME).insertOne(userData);

    return {
        _id: result.insertedId,
        ...userData,
    };
}

export async function updateUser(env, filter, update) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).updateOne(filter, {
        $set: update,
    });
}

export async function deleteUser(env, filter) {
    const db = await getDatabase(env);

    return db.collection(COLLECTION_NAME).deleteOne(filter);
}