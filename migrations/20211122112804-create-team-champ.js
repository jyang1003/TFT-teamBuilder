'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('teamChamps', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      teamId: {
        type: Sequelize.INTEGER
      },
      championOne: {
        type: Sequelize.INTEGER
      },
      championTwo: {
        type: Sequelize.INTEGER
      },
      championThree: {
        type: Sequelize.INTEGER
      },
      championFour: {
        type: Sequelize.INTEGER
      },
      championFive: {
        type: Sequelize.INTEGER
      },
      championSix: {
        type: Sequelize.INTEGER
      },
      championSeven: {
        type: Sequelize.INTEGER
      },
      championEight: {
        type: Sequelize.INTEGER
      },
      championNine: {
        type: Sequelize.INTEGER
      },
      championTen: {
        type: Sequelize.INTEGER
      },
      championEleven: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('teamChamps');
  }
};