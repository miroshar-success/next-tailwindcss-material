import { mongoose } from 'mongoose';

const uri = 'mongodb://localhost:27017'; // Your MongoDB connection string
const dbName = 'portfolio'; // Name of your MongoDB database

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
    if (cachedClient && cachedDb) {
        return { client: cachedClient, db: cachedDb };
    }

    const client = await mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: dbName,
    });

    const db = client.connection;
    cachedClient = client;
    cachedDb = db;

    return { client, db };
}
