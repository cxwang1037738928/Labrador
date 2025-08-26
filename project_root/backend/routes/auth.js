// routes/auth.js

// route handlers for authenticating and registering user
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const validation = require('../middleware/validation');

// implement static routes first
router.post('/register', validation.validateRegister, authController.register);
router.post('/login', validation.validateLogin, authController.login);
router.post('/activate', validation.validateActivate, authController.activate);
router.post('/reset', validation.validateEmail, authController.requestPasswordReset);

// then add the parameterized routes
router.post('/reset/:resetToken', validation.validatePasswordReset, authController.resetPassword);













module.exports = router;