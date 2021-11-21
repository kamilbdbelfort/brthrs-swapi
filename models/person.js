"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      person.belongsToMany(models.film, {
        through: "film_person",
        foreignKey: "personId",
      });
      person.belongsTo(models.planet);
    }
  }
  person.init(
    {
      name: DataTypes.STRING,
      height: DataTypes.STRING,
      mass: DataTypes.STRING,
      hair_color: DataTypes.STRING,
      skin_color: DataTypes.STRING,
      eye_color: DataTypes.STRING,
      birth_year: DataTypes.STRING,
      gender: DataTypes.STRING,
      planetId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "person",
    }
  );
  return person;
};
