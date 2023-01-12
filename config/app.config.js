require('dotenv').config();

module.exports = {
    'name': process.env.APP_NAME || 'HG_RESTAPIs',
    'env': process.env.APP_ENV || 'development',
    'port': process.env.APP_PORT || 8080,
    'key': process.env.APP_KEY || 'APPKEY',
    'url': process.env.APP_URL || 'http://localhost',
};