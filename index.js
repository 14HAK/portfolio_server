const express = require('express');
const skillsRouter = require('./routes/skillsRoute');

const app = express();
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})


app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.use('/api', skillsRouter)


app.listen(3000, () => {
  console.log('Server running on port 3000');
});