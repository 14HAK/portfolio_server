require('dotenv').config()
const { MongoClient } = require('mongodb')

const mongodbURI = process.env.MONGO_CONNECTION_STRING_URI;

const client = MongoClient(mongodbURI);

client.connect()

const db = client.db('portfolio');
const reposCollection = db.collection('repository');
const skillsCollection = db.collection('skills');