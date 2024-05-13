
const express = require('express');
const { login, register } = require('../controllers/authController');

const router = express.Router();

// Login Route
router.post('/login', login);

// Register Route
router.post('/register', register);

module.exports = router;
