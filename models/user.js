'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class user extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // user.hasOne(models.sample_table, {
            //     foreignKey: 'user_id',
            //     targetKey: 'user_id',
            //     onDelete: 'CASCADE'
            // })
        }
    };
    user.init({
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.TEXT,
        is_active: DataTypes.BOOLEAN,
        created_by: DataTypes.INTEGER,
        created_date: DataTypes.DATE,
        modified_by: DataTypes.INTEGER,
        modified_date: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'user',
        timestamps: false,
        freezeTableName: true
    });
    return user;
};