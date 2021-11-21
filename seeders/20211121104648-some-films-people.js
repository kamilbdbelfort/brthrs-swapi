"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "films_people",
      [
        {
          filmsId: 1,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 19,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 1,
          peopleId: 81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("films_people", null, {});
  },
};
