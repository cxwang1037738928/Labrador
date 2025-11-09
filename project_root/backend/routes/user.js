// routes/user.js

const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const cashierController = require('../controllers/cashierController');
const managerController = require('../controllers/managerController');
const adminController = require('../controllers/adminController');
const auth = require('../middleware/auth'); // use existing authorization middleware

// // static routes
// router.get('/me', auth.authenticate, userController.getMe); 

// // ... room for other routes

// // protected routes for cashier auth or above
// router.patch('/points', authenticateJWT, requireCashier, cashierController.addPoints);
// router.post('/verify-image', authenticateJWT, requireCashier, cashierController.verifyImage);
// router.patch('/validity-percentage', authenticateJWT, requireCashier, cashierController.updateValidityPercentage);

// // protected routes for manager auth or above
// router.get('/users', authenticateJWT, requireManager, managerController.getAllUsers);
// router.get('/credentials', authenticateJWT, requireManager, managerController.getUserCredentials);
// router.get('/organizations', authenticateJWT, requireManager, managerController.getAllOrganizations);
// router.patch('/promote', authenticateJWT, requireManager, managerController.promoteUser);
// router.patch('/demote', authenticateJWT, requireManager, managerController.demoteUser);

// // protected routes for admin auth or above
// router.patch('/admin/promote', authenticateJWT, requireAdmin, adminController.promoteToManager);
// router.patch('/admin/demote', authenticateJWT, requireAdmin, adminController.demoteManager);

// static routes
router.get('/me', authenticateJWT, userController.getMe); // only authenticate

// protected routes for cashier auth or above
router.patch('/points', requireCashier, cashierController.addPoints);
router.post('/verify-image', requireCashier, cashierController.verifyImage);
router.patch('/validity-percentage', requireCashier, cashierController.updateValidityPercentage);

// protected routes for manager auth or above
router.get('/users', requireManager, managerController.getAllUsers);
router.get('/credentials', requireManager, managerController.getUserCredentials);
router.get('/organizations', requireManager, managerController.getAllOrganizations);
router.patch('/promote', requireManager, managerController.promoteUser);
router.patch('/demote', requireManager, managerController.demoteUser);

// protected routes for admin auth or above
router.patch('/admin/promote', requireAdmin, adminController.promoteToManager);
router.patch('/admin/demote', requireAdmin, adminController.demoteManager);

// future parametized routes

module.exports = router;