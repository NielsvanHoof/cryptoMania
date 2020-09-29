'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Favorites', {
      favoriteId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type:Sequelize.INTEGER,
        references:{
            model:'Users',
            key:'userId',
        },
        onDelete:'CASCADE',
      },
      coinId: {
        type:Sequelize.INTEGER,
        references:{
            model:'Cryptocoins',
            key:'coinId',
        },
        onDelete:'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Favorites');
  }
};
