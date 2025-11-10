// controllers/imageControllers.js


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const multer = require('multer');
const path = require('path');

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/images/'); // Make sure this directory exists
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});


// uploads files to the uploads/images directory by default
const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
    fileFilter: (req, file, cb) => {
        const allowedTypes = /jpeg|jpg|png|gif|bmp/;
        const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = allowedTypes.test(file.mimetype);
        
        if (mimetype && extname) {
            return cb(null, true);
        } else {
            cb(new Error('Only image files are allowed'));
        }
    }
}).single('image');

// corresponds to /image/upload
const uploadImage = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                return res.status(400).json({ error: err.message });
            }

            if (!req.file) {
                return res.status(400).json({ error: 'No image file uploaded' });
            }

            const { organizationId, width, height } = req.body;

            // Create image record
            const image = await prisma.image.create({
                data: {
                    userId: req.user.id,
                    organizationId: organizationId ? parseInt(organizationId) : null,
                    filePath: req.file.path,
                    fileName: req.file.originalname,
                    fileSize: req.file.size,
                    width: width ? parseInt(width) : null,
                    height: height ? parseInt(height) : null,
                    format: path.extname(req.file.originalname).substring(1)
                }
            });

            res.status(201).json({ 
                message: 'Image uploaded successfully',
                imageId: image.id,
                image: image
            });
        });
    } catch (error) {
        console.error('Upload image error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to /image/my-image
const getUserImages = async (req, res) => {
    try {
        const { status } = req.query;
        
        const where = {
            userId: req.user.id
        };

        if (status) {
            where.status = status;
        }

        const images = await prisma.image.findMany({
            where,
            include: {
                annotations: {
                    select: {
                        id: true,
                        label: true,
                        x: true,
                        y: true,
                        width: true,
                        height: true,
                        color: true,
                        isValidated: true
                    }
                },
                verifications: {
                    select: {
                        id: true,
                        isValid: true,
                        notes: true,
                        mlScore: true,
                        verifiedAt: true,
                        verifier: {
                            select: {
                                name: true,
                                role: true
                            }
                        }
                    }
                }
            },
            orderBy: {
                uploadedAt: 'desc'
            }
        });

        res.status(200).json(images);
    } catch (error) {
        console.error('Get user images error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to image/:id (cashier+ authentication required)
const getImageById = async (req, res) => {
    try {
        const { id } = req.params;

        const image = await prisma.image.findUnique({
            where: { id: parseInt(id) },
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true
                    }
                },
                annotations: {
                    include: {
                        user: {
                            select: {
                                name: true
                            }
                        }
                    }
                },
                verifications: {
                    include: {
                        verifier: {
                            select: {
                                name: true,
                                role: true
                            }
                        }
                    }
                }
            }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // Check if user has access to this image
        if (image.userId !== req.user.id && !['cashier', 'manager', 'admin'].includes(req.user.role)) {
            return res.status(403).json({ error: 'Access denied' });
        }

        res.status(200).json(image);
    } catch (error) {
        console.error('Get image by ID error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// corresponds to the DELETE endpoint of image/:id
const deleteImage = async (req, res) => {
    try {
        const { id } = req.params;

        const image = await prisma.image.findUnique({
            where: { id: parseInt(id) }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // Only owner or admin can delete
        if (image.userId !== req.user.id && req.user.role !== 'admin') {
            return res.status(403).json({ error: 'Access denied' });
        }

        // Delete the image (cascade will delete annotations and verifications)
        await prisma.image.delete({
            where: { id: parseInt(id) }
        });

        // TODO: Also delete the physical file from storage
        // const fs = require('fs');
        // fs.unlinkSync(image.filePath);

        res.status(200).json({ message: 'Image deleted successfully' });
    } catch (error) {
        console.error('Delete image error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Corresponds to image/all/list (Cashier+ auth required)
const getAllImages = async (req, res) => {
    try {
        const { status, userId, organizationId } = req.query;
        
        const where = {};
        
        if (status) where.status = status;
        if (userId) where.userId = parseInt(userId);
        if (organizationId) where.organizationId = parseInt(organizationId);

        const images = await prisma.image.findMany({
            where,
            include: {
                user: {
                    select: {
                        id: true,
                        name: true,
                        email: true,
                        validityPercentage: true
                    }
                },
                annotations: {
                    select: {
                        id: true,
                        label: true,
                        isValidated: true
                    }
                },
                _count: {
                    select: {
                        annotations: true,
                        verifications: true
                    }
                }
            },
            orderBy: {
                uploadedAt: 'desc'
            }
        });

        res.status(200).json(images);
    } catch (error) {
        console.error('Get all images error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// /controllers/imageController

module.exports = {
    uploadImage,
    getUserImages,
    getImageById,
    deleteImage,
    getAllImages
};