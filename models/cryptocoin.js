'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cryptocoin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cryptocoin.init({
    coinId:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    coinName: DataTypes.STRING,
    coinPrice: DataTypes.INTEGER,
    coinAmount: DataTypes.INTEGER,
    totalValue: DataTypes.STRING,
    boughtOn: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Cryptocoin',
  });
  return Cryptocoin;
};
