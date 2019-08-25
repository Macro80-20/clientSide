var express = require('express');
var router = express.Router();
const db = require('../models/index')
var bodyParser = require('body-parser')


// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true})
const Car = db["Car"]
const User = db["User"]

/* GET CARS listing. */
 router.get('/',  (req, res)  => {
 Car.findAll({include: [{ model: User,as:"userCars"}]}).then(cars => {
     res.send(cars);
    });
  });

/* Get the users Listing of the car chainge this on postman to  */
router.get('/inventory',  (req, res)  => {
  //if the user is equal to the current user then we do this 
  Car.findAll({
      where: { id: req.params.userId },
      include: [{model:User, as:"userCars"}]
    }).then(car => {
      res.send(car);
  })

});

/* create a listing */
router.post("/", (req, res) => {
    Car.create({
        model: req.body.model,
        make: req.body.make,
        color: req.body.color,
        images:req.body.images,
        transmission: req.body.transmission,
        fuelType: req.body.fuelType,
        doors: req.body.doors,
        year: req.body.year,
        numOfOwners: req.body.numOfOwners,
        engineSize: req.body.engineSize,
        userId: req.body.userId,
        createdAt: new Date(),
        updatedAt: new Date(),
    })
      .then(cars => res.send(cars))
      .catch(err => console.log(err));
  });


  // USER CAN UUPDATE THEIR CAR SPECS 
  router.put('/:userId', (req, res)  => {
   let privateParams = {}
    for (const key in req.body) {
      console.log(key, req.body[key])
        privateParams[key] = req.body[key]
      }
      console.log(privateParams)
    Car.update(
        privateParams,
        {returning:true, where: {id: req.params.userId}})
        .then(([rowsUpdated,[updatedCar]]) => res.send(updatedCar))

});


  router.delete("/:id", (req, res) => {
    Car.destroy({
      where: { id: req.params.id }
    }).then(car => {
      res.send(car);
    });
  });
// db["User"].destroy({where: {}}).then( () => console.log("daat destroyws"))
 


module.exports = router;

