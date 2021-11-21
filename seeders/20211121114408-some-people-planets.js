"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "people_planets",
      [
        // planet ID 1
        {
          peopleId: 1,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 2,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 4,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 6,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 7,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 8,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 9,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 11,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 43,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 62,
          planetsId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 2
        {
          peopleId: 5,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 68,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 81,
          planetsId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 6
        {
          peopleId: 26,
          planetsId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 7
        {
          peopleId: 30,
          planetsId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 8
        {
          peopleId: 3,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 21,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 35,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 36,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 37,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 38,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 39,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 42,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 60,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 61,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 66,
          planetsId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 9
        {
          peopleId: 34,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 55,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 74,
          planetsId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 10
        {
          peopleId: 22,
          planetsId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 72,
          planetsId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 73,
          planetsId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 11
        {
          peopleId: 63,
          planetsId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 12
        {
          peopleId: 83,
          planetsId: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 14
        {
          peopleId: 13,
          planetsId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 80,
          planetsId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 15
        {
          peopleId: 6,
          planetsId: 15,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 18
        {
          peopleId: 33,
          planetsId: 18,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 20
        {
          peopleId: 10,
          planetsId: 20,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 21
        {
          peopleId: 12,
          planetsId: 21,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 22
        {
          peopleId: 14,
          planetsId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 18,
          planetsId: 22,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 23
        {
          peopleId: 15,
          planetsId: 23,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 24
        {
          peopleId: 16,
          planetsId: 24,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 26
        {
          peopleId: 19,
          planetsId: 26,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 28
        {
          peopleId: 20,
          planetsId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 23,
          planetsId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 29,
          planetsId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 32,
          planetsId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 75,
          planetsId: 28,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 29
        {
          peopleId: 24,
          planetsId: 29,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 30
        {
          peopleId: 25,
          planetsId: 30,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 31
        {
          peopleId: 27,
          planetsId: 31,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 32
        {
          peopleId: 28,
          planetsId: 32,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 33
        {
          peopleId: 31,
          planetsId: 33,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 34
        {
          peopleId: 40,
          planetsId: 34,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 35
        {
          peopleId: 41,
          planetsId: 35,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 36
        {
          peopleId: 44,
          planetsId: 36,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 37
        {
          peopleId: 45,
          planetsId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 46,
          planetsId: 37,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 38
        {
          peopleId: 47,
          planetsId: 38,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 39
        {
          peopleId: 48,
          planetsId: 39,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 40
        {
          peopleId: 49,
          planetsId: 40,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 41
        {
          peopleId: 50,
          planetsId: 41,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 42
        {
          peopleId: 51,
          planetsId: 42,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 43
        {
          peopleId: 52,
          planetsId: 43,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 44
        {
          peopleId: 53,
          planetsId: 44,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 45
        {
          peopleId: 54,
          planetsId: 45,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 47
        {
          peopleId: 56,
          planetsId: 47,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 48
        {
          peopleId: 57,
          planetsId: 48,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 49
        {
          peopleId: 58,
          planetsId: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 50
        {
          peopleId: 59,
          planetsId: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 51
        {
          peopleId: 64,
          planetsId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          peopleId: 65,
          planetsId: 51,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 52
        {
          peopleId: 67,
          planetsId: 52,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 53
        {
          peopleId: 69,
          planetsId: 53,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 54
        {
          peopleId: 70,
          planetsId: 54,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 55
        {
          peopleId: 71,
          planetsId: 55,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 56
        {
          peopleId: 76,
          planetsId: 56,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 57
        {
          peopleId: 77,
          planetsId: 57,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 58
        {
          peopleId: 78,
          planetsId: 58,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 59
        {
          peopleId: 79,
          planetsId: 59,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        // planet ID 60
        {
          peopleId: 82,
          planetsId: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("people_planets", null, {});
  },
};
