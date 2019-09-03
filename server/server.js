

const db=require('./models/index')
const routes = require('./routes/index')


const createError = require('http-errors');
// body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');

// * wildcard allows access from any origin.
const app = express().use("*",cors());
const port = 3001


//returns middleware that only pares json and only looks at requests where the 
// Content-type matches the type 
app.use(bodyParser.json()); 
// app.use(bodyParser.urlencoded({ extended: true })); // no need for this 

// To play with 
// app.use((req, res, next) => {
//   next(createError(404));
// });

app.use('/users', routes.user);
app.use('/cars', routes.car);
// db.Car.findAll().then(resp => console.log(resp))



// I am able to fetch from the client side
app.get('/express_backend', (req, res) => res.send('Your express backend is connected to react'))



db.sequelize.sync().then(() => {
  app.listen(port, () => 
console.log(`Example app listening on port ${port}!`)
)
})


// db["Car"].findAll({include: [{ model: db.User, as: "userCars"}]}).then(cars => console.log(cars))
// db["User"].findAll().then(users => console.log(users))
// db["Car"].findAll().then(users => console.log(users))


 //*This one is about testing and seeing my class Methods in action
// db["User"].bark()

  //*This one is about returning the info i want from our sequelize object 
// db.User.findAll({
//   where: { id: 2 }}).then(user => console.log(user[0].dataValues))

  //* This one is about using instance methods  , test() is the instance mwthod
//   db.User.findAll({
//     where: { id: 1 }}).then(user => console.log(user[0].test()))
  //*This one is about using the alias ot turn what cars belongs to the user 
// db.User.findAll({
//   where: { id: 1 }}).then(user => user[0].getUserCars()).then(resp => console.log(resp))


