const express = require('express');
var createError = require('http-errors');
const faker = require("fakergem");
// const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const db=require('./models/index')
const routes = require('./routes/index')

const app = express(); 
const port = 30001


  app.use(cors());  
  app.use(bodyParser.json()); 
  app.use(bodyParser.urlencoded({ extended: true })); 
  // // Log requests to the console.
  // app.use(logger('dev'));

// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use('/users', routes.user);
app.use('/cars', routes.car);
// db.Car.findAll().then(resp => console.log(resp))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/api/greeting', (req, res) => {
  const name = req.query.name || 'World';
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});



db.sequelize.sync().then(() => {
  app.listen(port, () => 
console.log(`Example app listening on port ${port}!`)
)
})


// db["Car"].findAll({include: [{ model: db.User, as: "userCars"}]}).then(cars => console.log(cars))
// db["User"].findAll().then(users => console.log(users))
db["Car"].findAll().then(users => console.log(users))
