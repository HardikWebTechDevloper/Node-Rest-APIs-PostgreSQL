'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class api_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // api_log.belongsTo(models.admin_user, {
      //   foreignKey: 'admin_user_id',
      // })
      // api_log.belongsTo(models.user, {
      //   foreignKey: 'user_id',
      // })
    }
  };
  api_logs.init({
    api_log_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
  },
    admin_user_id: DataTypes.INTEGER,
    api_name: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    is_admin: DataTypes.BOOLEAN,
    api_request: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    ip_address: DataTypes.STRING,
    error_message: DataTypes.STRING,
    timestamp: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'api_logs',
    timestamps: false,
    freezeTableName: true
  });
  return api_logs;
};