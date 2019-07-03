'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model: {
        type: Sequelize.STRING
      },
      make: {
        type: Sequelize.STRING
      },
      color: {
        type: Sequelize.STRING
      },
      images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: []
        },
      doors: {
        type: Sequelize.INTEGER
      },
      year: {
        type: Sequelize.STRING
      },
      numOfOwners: {
        type: Sequelize.INTEGER
      },
      engineSize: {
        type: Sequelize.STRING
      },

      price: {
        type: Sequelize.INTEGER
      },

      userId: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        foreignKey: true,
      references: {
        model: 'Users', // name of Target model
        key: 'id', // key in Target model that we're referencing
      },

      },
  
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
    
})
},
  down: (queryInterface, Sequelize) =>  queryInterface.dropTable('Cars')
  
}
