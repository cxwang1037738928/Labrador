// controllers/adminController.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const adminController = {
    async promoteToManager(req, res) {
        try {
            const { userId } = req.body;

            // validate input
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: "Valid user ID is required" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { 
                    id: true, 
                    name: true, 
                    email: true, 
                    role: true, 
                    isActive: true 
                }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            if (!targetUser.isActive) {
                return res.status(400).json({ error: "Cannot promote inactive user" });
            }

            // check if user is already a manager or admin
            if (targetUser.role === 'manager') {
                return res.status(400).json({ error: "User is already a manager" });
            }

            if (targetUser.role === 'admin') {
                return res.status(400).json({ error: "Cannot promote an admin" });
            }

            // promote user to manager
            const updatedUser = await prisma.user.update({
                where: { id: parseInt(userId) },
                data: { role: 'manager' },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    role: true
                }
            });

            res.status(200).json({
                message: "Successfully promoted user to manager",
                user: updatedUser
            });

        } catch (error) {
            console.error('Promote to manager error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    },

    async demoteManager(req, res) {
        try {
            const { userId } = req.body;

            // validate input
            if (!userId || isNaN(userId)) {
                return res.status(400).json({ error: "Valid user ID is required" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: parseInt(userId) },
                select: { 
                    id: true, 
                    name: true, 
                    email: true, 
                    role: true, 
                    isActive: true 
                }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User not found" });
            }

            // check if user is actually a manager
            if (targetUser.role !== 'manager') {
                return res.status(400).json({ 
                    error: "Can only demote managers. Target user is not a manager." 
                });
            }

            // cannot demote oneself
            if (parseInt(userId) === req.user.id) {
                return res.status(403).json({ 
                    error: "Cannot demote yourself. Another admin must perform this action." 
                });
            }

            // demote manager to regular user
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

            res.status(200).json({
                message: "Successfully demoted manager to user",
                user: updatedUser
            });

        } catch (error) {
            console.error('Demote manager error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "User not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = adminController;