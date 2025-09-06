// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const auth = require('../middleware/auth'); // use existing authorization middleware

// static routes
router.get('/me', auth.authenticate, userController.getMe); 

// ... room for other routes

// protected routes for cashier auth or above
router.patch('/points', authenticateJWT, requireCashier, cashierController.addPoints);
router.post('/verify-image', authenticateJWT, requireCashier, cashierController.verifyImage);
router.patch('/validity-percentage', authenticateJWT, requireCashier, cashierController.updateValidityPercentage);

// future parametized routes

module.exports = router;