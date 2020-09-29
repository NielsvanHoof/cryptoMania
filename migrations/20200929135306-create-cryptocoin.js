'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Cryptocoins', {
      coinId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      coinName: {
        type: Sequelize.STRING
      },
      coinPrice: {
        type: Sequelize.INTEGER
      },
      coinAmount: {
        type: Sequelize.INTEGER
      },
      totalValue: {
        type: Sequelize.STRING
      },
      boughtOn: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Cryptocoins');
  }
};
