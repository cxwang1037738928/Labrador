// routes/organization.js

const express = require('express');
const router = express.Router();
const organizationController = require('../controllers/organizationController');
const { authenticateJWT } = require('../middleware/auth');

// static routes first
router.post('/', authenticateJWT, organizationController.createOrganization);
router.post('/:id/invite', authenticateJWT, organizationController.inviteMember);

// parameterized routes last
router.delete('/:id/member/:userId', authenticateJWT, organizationController.removeMember);

module.exports = router;