// models/film_person.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class film_person extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // // define association here
      film_person.belongsTo(models.film);
      film_person.belongsTo(models.person);
    }
  }
  film_person.init(
    {
      filmId: { type: DataTypes.INTEGER, allowNull: false },
      personId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "film_person",
    }
  );
  return film_person;
};
