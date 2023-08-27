require("dotenv").config();
const express = require('express');
const cors = require("cors");
const skillsRouter = require('./routes/skillsRoute');

const port = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(express.json())

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



