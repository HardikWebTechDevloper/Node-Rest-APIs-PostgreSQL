var Sequelize = require("sequelize");
var pg = require('pg');
var sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectModule: pg,
    port: process.env.DB_PORT,
    pool: {
        max: 100,
        min: 0,
        acquire: 1200000,
        idle: 1000000,
    },
    logging: false,
    define: {
        timestamps: false,
    }
});


module.exports = {
    sequelize: sequelize
};