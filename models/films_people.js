// models/films_people.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class films_people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      films_people.belongsTo(models.films);
      films_people.belongsTo(models.people);
    }
  }
  films_people.init(
    {
      filmsId: { type: DataTypes.INTEGER, allowNull: false },
      peopleId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "films_people",
    }
  );
  return films_people;
};
