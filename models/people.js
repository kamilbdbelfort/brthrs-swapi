'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class people extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  people.init({
    name: DataTypes.STRING,
    height: DataTypes.STRING,
    mass: DataTypes.STRING,
    hair_color: DataTypes.STRING,
    skin_color: DataTypes.STRING,
    eye_color: DataTypes.STRING,
    birth_year: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'people',
  });
  return people;
};