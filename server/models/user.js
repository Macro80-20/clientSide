'use strict';
const jwt  = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 5;

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: { 
      type: DataTypes.STRING, 
      allowNull: { 
        args: false, 
        msg: 'Please enter your name' 
      } 
    }, 
    username: { 
    type: DataTypes.STRING, 
    allowNull: { 
      args: false,
       msg: 'Please enter your username' 
      }
   }, 
   address: { 
    type: DataTypes.STRING, 
    allowNull: { 
      args: false,
       msg: 'Please enter your username' 
      }
   }, 
   email: { 
     type: DataTypes.STRING, 
     allowNull: { args: false, msg: 'Please enter your email address' }, 
     unique: { 
       args: true, 
       msg: 'Email already exists' 
      }, 
    validate: { 
      isEmail: { 
        args: true, 
        msg: 'Please enter a valid email address' 
      }, 
    }, 
   }, 
       password: { 
         type: DataTypes.STRING, 
         allowNull: { 
           args: false, msg: 'Please enter a password' 
          }, 
        //  validate: { 
        //    isNotShort: (value) => { 
        //      if (value.length < 8) { 
        //        throw new Error('Password should be at least 8 characters'); 
        //       } 
        //     }, 
        //   }, 
      } 
  },{}) 
  // Now, in case a user is deleted, 
  // we may want to cascade delete 
  // for all messages in relation to the user. 
 User.associate = models =>  User.hasMany(models.Car,{
  foreignKey: 'userId',
  as: 'userCars',
  onDelete: 'CASCADE',

  
 })



 //hook function get called after // User.create({name: 'Cody', password: '123'}), and run before new User is saved in the db
User.beforeCreate(async (userInstance,options) => {
  // auto-gen a salt and hash
  let encryptedPassword = await bcrypt.hash(userInstance.password, saltRounds)
  .then((hash) =>{
    // Store hash in your password DB.
   userInstance.password = hash;
  });
 return encryptedPassword
});

 //Class Methods

User.secret = function(){
  return "ssh"
}

  //{id: user.id}
User.issueToken= (data) => jwt.sign(data,User.secret())
 

User.token = function(req){
return req.headers['auth']
}

//Instance methods 
User.prototype.test = () => {
  console.log("WORKED")
  };

User.prototype.validPassword = function(password) {
  return bcrypt.compareSync(password, this.localPassword);
   // Load hash from my password Db
  // bcrypt.compareSync(myPlaintextPassword, hash);
}


  return User;
};

