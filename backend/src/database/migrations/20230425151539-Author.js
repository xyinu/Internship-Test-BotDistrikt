'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Author', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        unique:true,
        allowNull: false
      },
      biography: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue:queryInterface.sequelize.fn('now')
      },
      updated_at: {
        allowNull:false,
        type:Sequelize.DATE,
        defaultValue:queryInterface.sequelize.fn('now')
      },
      deleted_at: {
        type:Sequelize.DATE,
      }
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('Author');
  }
};
