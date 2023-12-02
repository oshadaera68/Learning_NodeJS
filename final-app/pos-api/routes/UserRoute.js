const express = require('express');
const userController = require('../controller/UserController');
const router = express.Router();

router.post('/register', userController.register);

module.exports = router;