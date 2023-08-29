require("dotenv").config();
const { client } = require('./model/skills');
const express = require('express');
const cors = require("cors");
const skillsRouter = require('./routes/skillsRoute');


const port = process.env.PORT || 5000;

const app = express();

app.use(express.json())
app.use(cors());

client.connect()

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api', skillsRouter)


app.listen(port, () => {
  console.log(`Server running on port: http://localhost:${port}`);
});



