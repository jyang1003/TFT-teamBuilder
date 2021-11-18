'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class champion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  champion.init({
    championName: DataTypes.STRING,
    origin: DataTypes.STRING,
    trait: DataTypes.STRING,
    championId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'champion',
  });
  return champion;
};