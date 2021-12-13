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
      // models.fileName.belongsTo/hasMany(models.File)
      models.champion.belongsToMany(models.team, {through: 'teamchamp', foreignKey: 'championName'})

    }
  };
  champion.init({
    championName: DataTypes.STRING,
    cost: DataTypes.STRING,
    traitOne: DataTypes.STRING,
    championId: DataTypes.STRING,
    traitTwo: DataTypes.STRING,
    traitThree: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'champion',
  });
  return champion;
};