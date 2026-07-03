import { MongoClient } from "mongodb";

let client = null;
let database = null;

export async function getDatabase(env) {
    if (database) {
        return database;
    }

    if (!env.MONGODB_URI) {
        throw new Error("MONGODB_URI is missing.");
    }

    if (!env.MONGODB_DATABASE) {
        throw new Error("MONGODB_DATABASE is missing.");
    }

    client = new MongoClient(env.MONGODB_URI);

    await client.connect();

    database = client.db(env.MONGODB_DATABASE);

    return database;
}