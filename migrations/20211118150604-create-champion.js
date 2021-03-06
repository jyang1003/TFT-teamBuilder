'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('champions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      championName: {
        type: Sequelize.STRING
      },
      cost: {
        type: Sequelize.STRING
      },
      traitOne: {
        type: Sequelize.STRING
      },
      championId: {
        type: Sequelize.STRING
      },
      traitTwo: {
        type: Sequelize.STRING
      },
      traitTwo: {
        type: Sequelize.STRING
      },
      traitThree: {
        allowNull: true,
        type: Sequelize.STRING
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
    await queryInterface.dropTable('champions');
  }
};