const { body } = require('express-validator');
const { Validate } = require('../middlewares/validate.middleware');

const createUserValidation = (req, res, next) => {
    return Validate([
        body("first_name", "User name can not be empty").isString().escape().trim().exists().notEmpty(),
        body("last_name", "State id can not be empty").isString().escape().trim().exists().notEmpty(),
        body("email", "District id can not be empty").isString().escape().trim().exists().notEmpty(),
        body("phone", "Taluk id can not be empty").isString().escape().trim().exists().notEmpty(),
        body("password", "Place can not be empty").isString().escape().trim().exists().notEmpty(),
    ])(req, res, next);
};

const updateUserValidation = (req, res, next) => {
    return Validate([
        body("user_id", "User id can not be empty").isInt().escape().trim().exists().notEmpty()
    ])(req, res, next);
};

module.exports = {
    createUserValidation,
    updateUserValidation
};