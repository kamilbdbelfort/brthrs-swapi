'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('people', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      height: {
        type: Sequelize.STRING
      },
      mass: {
        type: Sequelize.STRING
      },
      hair_color: {
        type: Sequelize.STRING
      },
      skin_color: {
        type: Sequelize.STRING
      },
      eye_color: {
        type: Sequelize.STRING
      },
      birth_year: {
        type: Sequelize.STRING
      },
      gender: {
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
    await queryInterface.dropTable('people');
  }
};