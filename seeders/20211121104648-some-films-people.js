"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "films_people",
      [
        // film ID 1
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
        // film ID 2
        {
          filmsId: 2,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 2,
          peopleId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // film ID 3
        {
          filmsId: 3,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 25,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 27,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 3,
          peopleId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // film ID 4
        {
          filmsId: 4,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 16,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 4,
          peopleId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // film ID 5
        {
          filmsId: 5,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 61,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 62,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 65,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 66,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 69,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 70,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 71,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 72,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 73,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 74,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 76,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 77,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 5,
          peopleId: 82,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // film ID 6
        {
          filmsId: 6,
          peopleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 13,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 46,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 63,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 64,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 67,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 68,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 75,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 80,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 81,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 82,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          filmsId: 6,
          peopleId: 83,
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
