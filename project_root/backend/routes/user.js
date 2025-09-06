// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth'); // use existing authorization middleware

// static routes
router.get('/me', auth.authenticate, userController.getMe); 

// ... room for other routes

// future parametized routes

module.exports = router;