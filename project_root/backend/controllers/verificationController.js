const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Helper function
// Input: userId: id of the user being assessed
// Function: calculates what percentage of the total images that the user uploaded is valid

// TODO: possibly changing the calculation to assess percentage of valid annotations instead
const updateUserValidityPercentage = async (userId) => {
    try {
        const userImages = await prisma.image.findMany({
            where: { userId },
            include: { verifications: true }
        });

        // gets all images that has at least one verification for the user
        const verified = userImages.filter(img => img.verifications.length > 0);
        if (verified.length === 0) return;
        
        // filters them by valid images
        const valid = verified.filter(img => 
            img.verifications.some(v => v.isValid)
        ).length;

        const percentage = (valid / verified.length) * 100;

        await prisma.user.update({
            where: { id: userId },
            data: { validityPercentage: parseFloat(percentage.toFixed(2)) }
        });
    } catch (error) {
        console.error('Update validity error:', error);
    }
};

// Verify image (cashier+) -- corresponds to POST /image/:imageId/verify
// Creates an imageVerification for image with imageId, with values isValid, notes, and mlScore
const verifyImage = async (req, res) => {
    try {
        const { imageId } = req.params;
        const { isValid, notes, mlScore } = req.body;

        if (typeof isValid !== 'boolean') {
            return res.status(400).json({ error: 'isValid must be a boolean' });
        }

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) },
            include: { user: true, annotations: true }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        const verification = await prisma.imageVerification.create({
            data: {
                imageId: parseInt(imageId),
                verifierId: req.user.id,
                isValid,
                notes: notes || null,
                mlScore: mlScore ? parseFloat(mlScore) : null
            }
        });

        const updated = await prisma.image.update({
            where: { id: parseInt(imageId) },
            data: {
                status: isValid ? 'approved' : 'rejected',
                isVerified: true
            }
        });

        await updateUserValidityPercentage(image.userId);

        res.status(200).json({
            message: 'Image verified successfully',
            verification,
            image: updated
        });
    } catch (error) {
        console.error('Verify image error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get list of verifications for image -- corresponds to GET /:imageId/verifications
// Includes the verifier's id, name, and role as well, in descending order by
// time of verification
const getImageVerifications = async (req, res) => {
    try {
        const { imageId } = req.params;

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        const verifications = await prisma.imageVerification.findMany({
            where: { imageId: parseInt(imageId) },
            include: {
                verifier: {
                    select: { id: true, name: true, role: true }
                }
            },
            orderBy: { verifiedAt: 'desc' }
        });

        res.status(200).json(verifications);
    } catch (error) {
        console.error('Get verifications error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get pending images -- corresponds to /image/pending/list
// Obtains all images with a pending verification status and unverified status,
// also gets its annotations. All sorted in descending order by date or upload
const getPendingImages = async (req, res) => {
    try {
        const { limit = 50 } = req.query;

        const pending = await prisma.image.findMany({
            where: {
                status: 'pending',
                isVerified: false
            },
            include: {
                user: {
                    select: { id: true, name: true, email: true }
                },
                annotations: {
                    select: {
                        id: true,
                        label: true,
                        x: true,
                        y: true,
                        width: true,
                        height: true,
                        color: true
                    }
                },
                _count: {
                    select: { annotations: true }
                }
            },
            orderBy: { uploadedAt: 'asc' },
            take: parseInt(limit)
        });

        res.status(200).json(pending);
    } catch (error) {
        console.error('Get pending images error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// ML verify image -- corresponds to /image/:imageId/MLverify
// calls the machine learning model to verify the annotations on an
// image. Annotations are accepted if the confidence value is above
// 0.5
const mlVerifyImage = async (req, res) => {
    try {
        const { imageId } = req.params;

        const image = await prisma.image.findUnique({
            where: { id: parseInt(imageId) },
            include: { annotations: true }
        });

        if (!image) {
            return res.status(404).json({ error: 'Image not found' });
        }

        // TODO: Call actual ML model
        const mlScore = Math.random() * 100;
        const isValid = mlScore > 60;

        const result = {
            imageId: image.id,
            mlScore: parseFloat(mlScore.toFixed(2)),
            isValid,
            suggestions: image.annotations.map(ann => ({
                annotationId: ann.id,
                label: ann.label,
                confidence: parseFloat((Math.random() * 100).toFixed(2)),
                recommendation: Math.random() > 0.5 ? 'accept' : 'review'
            }))
        };

        res.status(200).json({
            message: 'ML verification completed',
            result
        });
    } catch (error) {
        console.error('ML verify error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update user validity -- corresponds to /image/user-validity
// updates user's validity percentage to percentage.
const updateUserValidity = async (req, res) => {
    try {
        const { userId, percentage } = req.body;

        if (!userId || percentage === undefined) {
            return res.status(400).json({ error: 'userId and percentage required' });
        }

        if (percentage < 0 || percentage > 100) {
            return res.status(400).json({ error: 'Percentage must be 0-100' });
        }

        const user = await prisma.user.findUnique({
            where: { id: parseInt(userId) }
        });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const updated = await prisma.user.update({
            where: { id: parseInt(userId) },
            data: { validityPercentage: parseFloat(percentage) }
        });

        res.status(200).json({
            message: 'User validity updated',
            user: {
                id: updated.id,
                name: updated.name,
                validityPercentage: updated.validityPercentage
            }
        });
    } catch (error) {
        console.error('Update user validity error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// controllers/verificationController
module.exports = {
    verifyImage,
    getImageVerifications,
    getPendingImages,
    mlVerifyImage,
    updateUserValidity
};