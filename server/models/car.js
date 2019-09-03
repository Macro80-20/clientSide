'use strict';
module.exports = (sequelize, DataTypes) => {
  const Car = sequelize.define('Car', {
  //  instanceMethods: {
  //     testFunction:function() {
  //       console.log("name")
  //     }
  //   },
    model: DataTypes.STRING,
    make: DataTypes.STRING,
    color: DataTypes.STRING,
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      defaultValue: []
     },
     price: DataTypes.INTEGER,
     transmission: DataTypes.STRING,
     fuelType: DataTypes.STRING,
     doors: DataTypes.INTEGER,
     year: DataTypes.STRING,
     numOfOwners: DataTypes.INTEGER,
     engineSize: DataTypes.STRING,
     userId: DataTypes.INTEGER,
  }, {
  });
  
  Car.associate = (models)=> Car.belongsTo(models.User,{
    foreignKey: 'userId',
      as: 'userCars',
  })
  // instanceMethods:{ 
  return Car;
}
