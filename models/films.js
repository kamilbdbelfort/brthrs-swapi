'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class films extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  films.init({
    title: DataTypes.STRING,
    episode_id: DataTypes.INTEGER,
    opening_crawl: DataTypes.STRING,
    director: DataTypes.STRING,
    producer: DataTypes.STRING,
    release_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'films',
  });
  return films;
};