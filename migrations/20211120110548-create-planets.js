"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("planets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      rotation_period: {
        type: Sequelize.STRING,
      },
      orbital_period: {
        type: Sequelize.STRING,
      },
      diameter: {
        type: Sequelize.STRING,
      },
      climate: {
        type: Sequelize.STRING,
      },
      gravity: {
        type: Sequelize.STRING,
      },
      terrain: {
        type: Sequelize.STRING,
      },
      surface_water: {
        type: Sequelize.STRING,
      },
      population: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("planets");
  },
};
