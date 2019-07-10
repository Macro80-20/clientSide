var express = require('express');
var router = express.Router();
const db = require('../models/index')
const crypto = require('crypto')    
const bcrypt = require('bcrypt')                         
const User = db["User"]
const jwt  = require('jsonwebtoken');
// router.get()


//register: storing name, email and password 
router.post('/signup',  (req, res)  => {
  // I have a hook in the model that will encrypt passwords
    User.create({
        name: req.body.name,
        username: req.body.username,
        address: req.body.address,
        email: req.body.email,
        password:req.body.password,
        createdAt: new Date (),
        updatedAt: new Date()
    }).then(user => res.send(user))
    .catch(error => console.log(error))

});

//login page: storing and comparing email and password
//sign with authenticate 
router.post('/login',(req,res) =>{
    // console.log(req.headers['content-type'])
    User.findOne({
        where:{
            email: req.body.email
        }
    }).then( user =>{
        if(!user){
            res.send('this account does not exist')
        } else {
            bcrypt.compare(req.body.password, user.password, function (err, result) {
                if(result==true) {
                    res.send({email: user.email, token: User.issueToken({id: user.id})})
                } else{
                    res.send({error:"incorrect password"})
                }
            }
            )}
    })
})

router.post('/validate',(req,res) =>{
    const token =req.headers['authorisation']
    const decodedToken = jwt.verify(token,User.secret())
    // console.log(decodedToken.id)
    User.findOne({
        where:{
            id: decodedToken.id
        }
    }).then( currentUser =>{
        if(!currentUser){
            res.send({error:"invalid username/password combination"})
        } else {
            res.send({email: user.email, token: User.issueToken({id: currentUser.id})})
        }   
    })
}
)
    
  
//     def validate
//     user = current_user
//     if user
//       render json: { username: user.username, token: issue_token({ id: user.id }) }
//     else
//       render json: { error: 'User not found.' }, status: 404
//     end
//   end



router.post('/inventory',(req,res) =>{
//     def inventory
//     user = current_user
//     if user
//       render json: user.items
//     else
//       render json: { error: 'Invalid token.' }, status: 400
//     end
//   end
}
)

module.exports = router;
