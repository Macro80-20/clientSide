'use strict';
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
  }) 
  // Now, in case a user is deleted, 
  // we may want to cascade delete 
  // for all messages in relation to the user. 
 User.associate = models =>  User.hasMany(models.Car,{
  foreignKey: 'userId',
  as: 'userCars',
  onDelete: 'CASCADE',
 })
    
  return User;
};