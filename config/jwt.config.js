require('dotenv').config();

module.exports = {
    'jwt_constant': process.env.JWT_CONSTANT,
    'jwt_expire': process.env.JWT_EXPIRY,
    'jwt_prefix': process.env.JWT_PREFIX,
};