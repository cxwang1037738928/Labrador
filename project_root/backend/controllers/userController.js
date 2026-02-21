// controllers/userController.js

const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

// corresponds to /user/me
const userController = {
    async getMe(req, res) {
        try {
            // assuming user is already authenticated by middleware and attached to req.user
            const userId = req.user.id;

            // get complete user details with relationships
            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true,
                    points: true,
                    suspicious: true,
                    createdAt: true,
                    lastlogin: true,
                    profile: {
                        select: {
                            id: true,
                            bio: true,
                            image: true
                        }
                    },
                    organizations: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    },
                    ledOrganization: {
                        select: {
                            id: true,
                            name: true,
                            description: true
                        }
                    }
                }
            });

            if (!user) {
                return res.status(404).json({ error: "User not found" });
            }

            res.status(200).json(user);

        } catch (error) {
            console.error('Error in getMe controller:', error);
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = userController;