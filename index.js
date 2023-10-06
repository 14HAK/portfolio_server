const express = require('express');
require('dotenv').config();
const router = require('./router/router');
const { MongoClient, ServerApiVersion } = require('mongodb');
const cors = require('cors');


const port = process.env.PORT || 5000;

const app = express();

const uri = process.env.CONNECTION_STRING;
// 
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
  res.send(`<h1>Welcome!</h1>`);
});


//mongo db operation:
async function run() {
  try {
    await client.connect();

    await client.db('admin').command({ ping: 1 });
    console.log('MongoDB connection successful!');

    app.use('/api', router)

  } finally {
    await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Server running at port: http://localhost:${port}`);
});
