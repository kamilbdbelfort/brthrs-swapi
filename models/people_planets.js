// models/people_planets.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class people_planets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      people_planets.belongsTo(models.people);
      people_planets.belongsTo(models.planets);
    }
  }
  people_planets.init(
    {
      peopleId: { type: DataTypes.INTEGER, allowNull: false },
      planetsId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "people_planets",
    }
  );
  return people_planets;
};
