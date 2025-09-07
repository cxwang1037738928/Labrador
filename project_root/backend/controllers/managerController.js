// controllers/managerController.js


const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const managerController = {
    async getAllUsers(req, res) {
        try {
            // get all users with their data accuracy (validityPercentage)
            const users = await prisma.user.findMany({
                where: {
                    isActive: true // only get active users
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    validityPercentage: true,
                    role: true,
                    points: true,
                    suspicious: true,
                    createdAt: true
                },
                orderBy: {
                    createdAt: 'desc'
                }
            });

            res.status(200).json(users);

        } catch (error) {
            console.error('Get all users error:', error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    // Disable this endpoint in production
    async getUserCredentials(req, res) {
        try {
            
            // get only users and cashiers (not managers or admins)
            const users = await prisma.user.findMany({
                where: {
                    isActive: true,
                    role: {
                        in: ['user', 'cashier']
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    password: true, // Disable this in production
                    role: true
                },
                orderBy: {
                    name: 'asc'
                }
            });

            res.status(200).json(users);

        } catch (error) {
            console.error('Get user credentials error:', error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async getAllOrganizations(req, res) {
        try {
            // get all organizations with member count
            const organizations = await prisma.organization.findMany({
                select: {
                    id: true,
                    name: true,
                    description: true,
                    leader: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    _count: {
                        select: {
                            members: true
                        }
                    }
                },
                orderBy: {
                    name: 'asc'
                }
            });

            // format response to include membersCount
            const formattedOrganizations = organizations.map(org => ({
                id: org.id,
                name: org.name,
                description: org.description,
                leaderId: org.leader.id,
                leaderName: org.leader.name,
                membersCount: org._count.members
            }));

            res.status(200).json(formattedOrganizations);

        } catch (error) {
            console.error('Get all organizations error:', error);
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async promoteUser(req, res) {
        try {
            const { userId, role } = req.body;
            const managerId = req.user.id;

            // validate input
            if (!userId || isNaN(userId) || !role) {
                return res.status(400).json({ error: "Valid user ID and role are required" });
            }

            const allowedRoles = ['cashier', 'manager'];
            if (!allowedRoles.includes(role)) {
                return res.status(400).json({ error: "Role must be 'cashier' or 'manager'" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { id: true, name: true, role: true, isActive: true }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            if (!targetUser.isActive) {
                return res.status(400).json({ error: "Cannot promote inactive user" });
            }

            // authorization checks
            const currentUserRole = req.user.role;
            
            // managers can only promote to cashier, not to manager
            if (currentUserRole === 'manager' && role === 'manager') {
                return res.status(403).json({ error: "Managers cannot promote users to manager role" });
            }

            // cannot promote users who are already manager or admin
            if (['manager', 'admin'].includes(targetUser.role)) {
                return res.status(403).json({ error: "Cannot promote user who is already manager or admin" });
            }

            // update user role
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(userId) },
                data: { role },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true
                }
            });

            // log the promotion action
            await prisma.auditLog.create({
                data: {
                    action: 'PROMOTE_USER',
                    performedById: managerId,
                    targetUserId: parseInt(userId),
                    details: `Promoted from ${targetUser.role} to ${role}`,
                    ipAddress: req.ip
                }
            });

            res.status(200).json({
                message: `Successfully promoted user to ${role}`,
                user: updatedUser
            });

        } catch (error) {
            console.error('Promote user error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async demoteUser(req, res) {
        try {
            const { userId } = req.body;
            const managerId = req.user.id;

            // Validate input
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: "Valid user ID is required" });
            }

            // Check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { id: true, name: true, role: true, isActive: true }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            // Authorization checks
            // Can only demote cashiers (not regular users, managers, or admins)
            if (targetUser.role !== 'cashier') {
                return res.status(403).json({ 
                    error: "Can only demote cashiers. Target user is not a cashier." 
                });
            }

            // Demote to regular user role
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(userId) },
                data: { role: 'user' },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true
                }
            });

            // Log the demotion action
            await prisma.auditLog.create({
                data: {
                    action: 'DEMOTE_USER',
                    performedById: managerId,
                    targetUserId: parseInt(userId),
                    details: `Demoted from cashier to user`,
                    ipAddress: req.ip
                }
            });

            res.status(200).json({
                message: "Successfully demoted cashier to user",
                user: updatedUser
            });

        } catch (error) {
            console.error('Demote user error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = managerController;