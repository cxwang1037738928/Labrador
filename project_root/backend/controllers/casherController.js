const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// mock ML model verification (will be replaced with actual ML integration later)
const mockMLModelVerification = async (imageId) => {
    
    return new Promise((resolve) => {
        setTimeout(() => {
            const results = ['valid', 'invalid', 'uncertain'];
            const randomResult = results[Math.floor(Math.random() * results.length)];
            resolve({ 
                result: randomResult,
                confidence: Math.random().toFixed(2),
                processedAt: new Date().toISOString()
            });
        }, 1000); // 1 second simulated processing time
    });
};

const cashierController = {
    async addPoints(req, res) {
        try {
            const { userId, points } = req.body;
            const cashierId = req.user.id;

            // validate input
            if (!userId || isNaN(userId) || !points || isNaN(points)) {
                return res.status(400).json({ error: "Valid user ID and points are required" });
            }

            if (points <= 0) {
                return res.status(400).json({ error: "Points must be a positive number" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { id: true, points: true }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            // update user points
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(userId) },
                data: {
                    points: {
                        increment: parseInt(points)
                    }
                },
                select: {
                    id: true,
                    name: true,
                    points: true
                }
            });

            // log the points transaction
            await prisma.pointsTransaction.create({
                data: {
                    userId: parseInt(userId),
                    cashierId: cashierId,
                    points: parseInt(points),
                    type: 'ADDITION',
                    reason: 'Manual points addition by cashier'
                }
            });

            res.status(200).json({
                message: "Points added successfully",
                user: {
                    id: updatedUser.id,
                    name: updatedUser.name,
                    newPointsTotal: updatedUser.points
                }
            });

        } catch (error) {
            console.error('Add points error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async verifyImage(req, res) {
        try {
            const { ImageId } = req.body;

            // validate input
            if (!ImageId || isNaN(ImageId)) {
                return res.status(400).json({ error: "Valid Image ID is required" });
            }

            // TODO: replace with actual image verification logic
            // for now, we'll use the mock ML service
            const verificationResult = await mockMLModelVerification(ImageId);

            // TODO: update image verification in database
            // await prisma.image.update({
            //     where: { id: parseInt(ImageId) },
            //     data: {
            //         verificationStatus: verificationResult.result,
            //         verificationConfidence: parseFloat(verificationResult.confidence),
            //         verifiedAt: new Date()
            //     }
            // });

            res.status(200).json({
                message: "Image verification completed",
                result: verificationResult
            });

        } catch (error) {
            console.error('Verify image error:', error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async updateValidityPercentage(req, res) {
        try {
            const { userId, percentage } = req.body;

            // validate input
            if (!userId || isNaN(userId) || percentage === undefined || isNaN(percentage)) {
                return res.status(400).json({ error: "Valid user ID and percentage are required" });
            }

            if (percentage < 0 || percentage > 100) {
                return res.status(400).json({ error: "Percentage must be between 0 and 100" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { id: true, name: true }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            // update user validity percentage
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(userId) },
                data: {
                    validityPercentage: parseFloat(percentage)
                },
                select: {
                    id: true,
                    name: true,
                    validityPercentage: true
                }
            });

            res.status(200).json({
                message: "Validity percentage updated successfully",
                user: {
                    id: updatedUser.id,
                    name: updatedUser.name,
                    validityPercentage: updatedUser.validityPercentage
                }
            });

        } catch (error) {
            console.error('Update validity percentage error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = cashierController;