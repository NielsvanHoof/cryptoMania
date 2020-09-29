'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Favorite.init({
    favoriteId: {
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
    },
    userId:{
        type:DataTypes.INTEGER,
        references:{
            model:'Users',
            key:'userId',
        },
        onDelete:'CASCADE',
    },
    coinId:{
        type:DataTypes.INTEGER,
        references:{
            model:'Cryptocoins',
            key:'coinId',
        },
        onDelete:'CASCADE',
    },
  }, {
    sequelize,
    modelName: 'Favorite',
  });
  return Favorite;
};
