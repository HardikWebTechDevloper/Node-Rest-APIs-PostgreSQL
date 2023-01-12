'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('api_logs', {
      api_log_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      admin_user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      api_name: {
        allowNull: false,
        type: Sequelize.STRING(255)
      },
      user_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      is_admin: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      api_request: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      status: {
        allowNull: false,
        type: Sequelize.BOOLEAN
      },
      ip_address: {
        allowNull: false,
        type: Sequelize.STRING
      },
      error_message: {
        type: Sequelize.STRING
      },
      timestamp: {
        allowNull: false,
        type: Sequelize.DATE
      },
     
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('api_logs');
  }
};