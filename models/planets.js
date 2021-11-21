"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class planets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      planets.belongsToMany(models.people, {
        through: "people_planets",
        foreignKey: "planetsId",
      });
    }
  }
  planets.init(
    {
      name: DataTypes.STRING,
      rotation_period: DataTypes.STRING,
      orbital_period: DataTypes.STRING,
      diameter: DataTypes.STRING,
      climate: DataTypes.STRING,
      gravity: DataTypes.STRING,
      terrain: DataTypes.STRING,
      surface_water: DataTypes.STRING,
      population: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "planets",
    }
  );
  return planets;
};
