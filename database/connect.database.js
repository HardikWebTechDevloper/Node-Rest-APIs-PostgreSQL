const { Pool } = require('pg');
const databaseConfig = require('../config/database.config');

const connect = new Pool({
    host: databaseConfig.host,
    port: databaseConfig.port,
    database: databaseConfig.database,
    user: databaseConfig.user,
    password: databaseConfig.password,
})

module.exports = connect;