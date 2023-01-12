'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('user', {
      user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      first_name: {
        type: Sequelize.STRING(50)
      },
      last_name: {
        type: Sequelize.STRING(50)
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING(250)
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING(12)
      },
      password: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      is_active: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      created_by: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      created_date: {
        created_date: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      },
      modified_by: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      modified_date: {
        allowNull: true,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('user');
  }
};