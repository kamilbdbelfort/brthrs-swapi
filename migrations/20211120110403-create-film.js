"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("films", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      episode_id: {
        type: Sequelize.INTEGER,
      },
      opening_crawl: {
        type: Sequelize.STRING(1000),
      },
      director: {
        type: Sequelize.STRING,
      },
      producer: {
        type: Sequelize.STRING,
      },
      release_date: {
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
    await queryInterface.dropTable("films");
  },
};
