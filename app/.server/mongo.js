import { MongoClient, BSON } from "mongodb";
import dotenv from "dotenv";

// Load environment variables in development
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

let connectionString = process.env.MONGO_DB_CONNECTION_STRING || "";

// Validate connection string
if (!connectionString) {
  throw new Error(
    "No connection string provided. \n\nPlease create a `.env` file in the root of this project. Add a MONGO_DB_CONNECTION_STRING variable with the connection string to your MongoDB cluster. \nRefer to the README.md file for more information."
  );
}

if (
  !connectionString.startsWith("mongodb://") &&
  !connectionString.startsWith("mongodb+srv://")
) {
  throw new Error(
    `Invalid MongoDB connection string: "${connectionString}". Must start with "mongodb://" or "mongodb+srv://".`
  );
}

// Log connection string for debugging (sanitize credentials)
if (process.env.NODE_ENV !== "production") {
  console.log(
    "MongoDB Connection String (sanitized):",
    connectionString.replace(/\/\/.*@/, "//<credentials>@")
  );
}

// Initialize MongoClient
let client;

if (process.env.NODE_ENV === "production") {
  client = new MongoClient(connectionString);
} else {
  if (!global.__db) {
    global.__db = new MongoClient(connectionString);
  }
  client = global.__db;
}

let ObjectId = BSON.ObjectId;

export { client, ObjectId };
