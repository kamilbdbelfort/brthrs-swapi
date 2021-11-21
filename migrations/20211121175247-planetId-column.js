"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("people", "planetId", {
      type: Sequelize.INTEGER,
      references: {
        model: "planets",
        key: "id",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("people", "planetId");
  },
};
