var express = require('express');
var router = express.Router();
const db = require('../models/index')

const User = db["User"]

// router.get()


/* CREATE users listing. */
router.post('/',  (req, res)  => {
    User.create({
        name: req.body.name,
        username: req.body.username,
        address: req.body.address,
        email: req.body.email,
        password: req.body.password,
        createdAt: new Date (),
        updatedAt: new Date()
    }).then(user => res.send(user))
    .catch(error => console.log(error))

});

module.exports = router;
