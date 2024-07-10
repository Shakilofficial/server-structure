const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.MONGODB_URI;
const dbName = "cleanCo";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

let database = null;

async function connectDB() {
  try {
    await client.connect();
    database = client.db(dbName);
    await client.db("admin").command({ ping: 1 });
    console.log(`Pinged successfully and connected to database: ${dbName}`);
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
    throw new Error("Failed to connect to MongoDB");
  }
}

function getCollection(collectionName) {
  if (!database) {
    throw new Error("You must connect to the database first");
  }
  return database.collection(collectionName);
}

module.exports = { client, connectDB, getCollection };
