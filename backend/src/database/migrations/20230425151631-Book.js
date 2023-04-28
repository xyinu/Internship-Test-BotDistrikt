'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('Book', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false
      },
      publisher: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year:{
        type: Sequelize.INTEGER,
        allowNull: false
      },
      authorId:{
        type:Sequelize.TEXT,
        allowNull:false,
        references:{
          model: 'Author',
          key:'name',
        },
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
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
    return queryInterface.dropTable('Book');
  }
};
