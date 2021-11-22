'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class teamChamp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  teamChamp.init({
    teamId: DataTypes.INTEGER,
    championOne: DataTypes.INTEGER,
    championTwo: DataTypes.INTEGER,
    championThree: DataTypes.INTEGER,
    championFour: DataTypes.INTEGER,
    championFive: DataTypes.INTEGER,
    championSix: DataTypes.INTEGER,
    championSeven: DataTypes.INTEGER,
    championEight: DataTypes.INTEGER,
    championNine: DataTypes.INTEGER,
    championTen: DataTypes.INTEGER,
    championEleven: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'teamChamp',
  });
  return teamChamp;
};