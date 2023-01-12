const express = require('express');
const usersController = require('../controllers/users.controller');
const { createUserValidation } = require('../validations/users.validation');
const { checkToken } = require('../middlewares/verifyAuth.middleware');
const router = express.Router();

router.post('/register', createUserValidation, usersController.register);
router.post('/get/all', usersController.getAllUsers);

module.exports = router;