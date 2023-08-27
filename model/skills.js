const { MongoClient } = require('mongodb');
require("dotenv").config();

const connectionString = process.env.CONNECTION_STRING;

const client = new MongoClient(connectionString);

client.connect()

const db = client.db('portfolio');

const skillCollections = db.collection('skills');
const repoCollections = db.collection('repositories')

client.close()

module.exports = { skillCollections, repoCollections };