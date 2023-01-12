express = require('express');
const router = express.Router();
const usersRoute = require('./users.route');

// Users Routes
router.use('/user', usersRoute);

module.exports = router;