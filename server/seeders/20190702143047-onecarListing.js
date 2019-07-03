'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
      return queryInterface.bulkInsert('Cars', [{
        make: "BWM",
        model: "Z4",
        color: "Blue",
        images: ["url"],
        transmission: "manual",
        fuelType: "petrol",
        doors: 4,
        year: "2007",
        numOfOwners: 4,
        engineSize: "1.6l",
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
    
  },

  down: (queryInterface, Sequelize) => {
 
      return queryInterface.bulkDelete('Cars', null, {});
  }
};
