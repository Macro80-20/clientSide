const faker = require("faker");
'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    let carsData = [];
      for (let i = 0; i < 10; i++) {
          const seedData = {
        make: "Mercedes",
        model: "AMG A 35 4MATIC",
        color: "black",
        images: [`${faker.image.imageUrl()}`],
        price: Math.floor(Math.random() * ( 50000 - 600 ) + 600),
        transmission: "manual",
        fuelType: "petrol",
        doors: 4,
        year: `${Math.floor(Math.random() * ( 2019 - 1995 ) + 1995)}`,
        numOfOwners: Math.floor(Math.random() * ( 10  -1 ) + 1),
        engineSize: `${Math.floor(Math.random() * (50 - 10) + 10) / 10}l`,
        userId: Math.floor(Math.random() * ( 19  -1 ) + 1),
        createdAt: new Date(),
        updatedAt: new Date(),
          };
          carsData.push(seedData);
      }
  
      return queryInterface.bulkInsert('Cars',carsData, {});

  },

  down: (queryInterface, Sequelize) => {

  
      return queryInterface.bulkDelete('Cars', null, {});
  
  }
};