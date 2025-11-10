// routes/image.js
const express = require('express');
const router = express.Router();
const { authenticateJWT, requireCashier } = require('../middleware/auth');

// Import controllers
const {
    uploadImage,
    getUserImages,
    getImageById,
    deleteImage,
    getAllImages
} = require('../controllers/imageController');

const {
    createAnnotation,
    createBulkAnnotations,
    updateAnnotation,
    deleteAnnotation,
    getImageAnnotations,
    validateAnnotation
} = require('../controllers/annotationController');

const {
    verifyImage,
    getImageVerifications,
    getPendingImages,
    mlVerifyImage,
    updateUserValidity
} = require('../controllers/verificationController');



// -------------------------------------------------------------------------
// STATIC ROUTES
// -------------------------------------------------------------------------

// POST /image/upload - Upload image
router.post('/upload', authenticateJWT, uploadImage);

// GET /image/my-image - Get current user's images
router.get('/my-image', authenticateJWT, getUserImages);

// PATCH /image/user-validity - Update user validity percentage (Cashier+)
router.patch('/user-validity', requireCashier, updateUserValidity);

// GET /image/all/list - Get all images with filters (Cashier+)
router.get('/all/list', requireCashier, getAllImages);

// GET /image/pending/list - Get pending images (Cashier+)
router.get('/pending/list', requireCashier, getPendingImages);

// -------------------------------------------------------------------------
// ANNOTATION ROUTES
// -------------------------------------------------------------------------

// POST /image/annotation - Create single annotation
router.post('/annotation', authenticateJWT, createAnnotation);

// POST /image/annotation/bulk - Create multiple annotations
router.post('/annotation/bulk', authenticateJWT, createBulkAnnotations);

// GET /image/annotation/:imageId/annotations - Get annotations for image
router.get('/annotation/:imageId/annotations', authenticateJWT, getImageAnnotations);

// PATCH /image/annotation/:id/validate - Validate annotation (Cashier+)
router.patch('/annotation/:id/validate', requireCashier, validateAnnotation);

// PATCH /image/annotation/:id - Update annotation
router.patch('/annotation/:id', authenticateJWT, updateAnnotation);

// DELETE /image/annotation/:id - Delete annotation
router.delete('/annotation/:id', authenticateJWT, deleteAnnotation);

// -------------------------------------------------------------------------
// DYNAMIC ROUTES LAST
// -------------------------------------------------------------------------

// POST /image/:imageId/verify - Verify image (Cashier+)
router.post('/:imageId/verify', requireCashier, verifyImage);

// GET /image/:imageId/verifications - Get verifications for image (Cashier+)
router.get('/:imageId/verifications', requireCashier, getImageVerifications);

// POST /image/:imageId/MLverify - ML verify image (Cashier+)
router.post('/:imageId/MLverify', requireCashier, mlVerifyImage);

// GET /image/:id - Get single image by ID
router.get('/:id', requireCashier, getImageById);

// DELETE /image/:id - Delete image
router.delete('/:id', authenticateJWT, deleteImage);

module.exports = router;
