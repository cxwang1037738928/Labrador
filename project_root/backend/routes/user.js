// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cashierController = require('../controllers/cashierController');
const managerController = require('../controllers/managerController');
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth'); // use existing authorization middleware

// static routes
router.get('/me', auth.authenticateJWT, userController.getMe); // only authenticate

// protected routes for cashier auth or above
router.patch('/points', auth.requireCashier, cashierController.addPoints);
router.post('/verify-image', auth.requireCashier, cashierController.verifyImage);
router.patch('/validity-percentage', auth.requireCashier, cashierController.updateValidityPercentage);

// protected routes for manager auth or above
router.get('/users', auth.requireManager, managerController.getAllUsers);
router.get('/credentials', auth.requireManager, managerController.getUserCredentials);
router.get('/organizations', auth.requireManager, managerController.getAllOrganizations);
router.patch('/promote', auth.requireManager, managerController.promoteUser);
router.patch('/demote', auth.requireManager, managerController.demoteUser);

// protected routes for admin auth or above
router.patch('/admin/promote', auth.requireAdmin, adminController.promoteToManager);
router.patch('/admin/demote', auth.requireAdmin, adminController.demoteManager);

// future parametized routes

module.exports = router;