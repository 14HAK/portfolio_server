const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();

const uri = process.env.CONNECTION_STRING;
// 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
client.connect();

const db = client.db('portfolio');

const skillCollection = db.collection('skills');
const repoCollection = db.collection('repositories');

module.exports = {
  skillCollection,
  repoCollection
}