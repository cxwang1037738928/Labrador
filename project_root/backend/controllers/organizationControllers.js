// controllers/organizationControllers.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const organizationController = {

    // corresponds to organization/ 
    async createOrganization(req, res) {
        try {
            const { name, description } = req.body;
            const userId = req.user.id; 

            
            if (!name || name.trim().length === 0) {
                return res.status(400).json({ error: "Organization name is required" }); // requires a name
            }

            // create table in database where user is the leader of the organization
            const organization = await prisma.organization.create({
                data: {
                    name: name.trim(),
                    description: description?.trim(),
                    leaderId: userId,
                    members: {
                        connect: { id: userId } // add the creator as a member as well
                    }
                }
            });

            res.status(201).json({
                message: "Organization created successfully",
                organizationid: organization.id
            });

        } catch (error) {
            console.error('Create organization error:', error);
            
            if (error.code === 'P2002') { // check for prisma unique constraint violation
                return res.status(400).json({ error: "Organization name already exists" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    },

    // corresponds to organization/:id/invite
    async inviteMember(req, res) {
        try {
            const organizationId = parseInt(req.params.id);
            const { userId: targetUserId } = req.body; // user to invite
            const currentUserId = req.user.id; // user making the invitation

          
            if (!targetUserId || isNaN(targetUserId)) {
                return res.status(400).json({ error: "Valid user ID is required" });
            }

            // check if organization exists and current user is a member. Note any user
            // can invite another use to an organization they themselves belong to.
            const organization = await prisma.organization.findUnique({
                where: { id: organizationId },
                include: {
                    members: {
                        where: { id: currentUserId },
                        select: { id: true }
                    }
                }
            });

            if (!organization) {
                return res.status(404).json({ error: "Organization not found" });
            }

            if (organization.members.length === 0) {
                return res.status(403).json({ error: "You must be a member of the organization to invite others" });
            }

            // check if target user exists
            const targetUser = await prisma.user.findUnique({
                where: { id: targetUserId },
                select: { id: true }
            });

            if (!targetUser) {
                return res.status(404).json({ error: "User to invite not found" });
            }

            // check if user is already a member
            const existingMember = await prisma.organization.findFirst({
                where: {
                    id: organizationId,
                    members: {
                        some: { id: targetUserId }
                    }
                }
            });

            if (existingMember) {
                return res.status(400).json({ error: "User is already a member of this organization" });
            }

            // add user to organization
            await prisma.organization.update({
                where: { id: organizationId },
                data: {
                    members: {
                        connect: { id: targetUserId }
                    }
                }
            });

            res.status(200).json({ message: "User invited successfully" });

        } catch (error) {
            console.error('Invite member error:', error);
            
            if (error.code === 'P2025') { // Record not found
                return res.status(404).json({ error: "Organization or user not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    },

    // organization/:id/member/:userId, deleting a user from an organization. Only the leader
    // of an organization can delete members
    async removeMember(req, res) {
        try {
            const organizationId = parseInt(req.params.id);
            const userIdToRemove = parseInt(req.params.userId);
            const currentUserId = req.user.id; // current logged in user making the removal

            // validate IDs
            if (isNaN(organizationId) || isNaN(userIdToRemove)) {
                return res.status(400).json({ error: "Invalid organization or user ID" });
            }

            // check if organization exists and current user is the leader
            const organization = await prisma.organization.findUnique({
                where: { id: organizationId },
                select: {
                    leaderId: true,
                    members: {
                        where: { id: userIdToRemove },
                        select: { id: true }
                    }
                }
            });

            if (!organization) {
                return res.status(404).json({ error: "Organization not found" });
            }

            if (organization.leaderId !== currentUserId) {
                return res.status(403).json({ error: "Only the organization leader can remove members" });
            }

            // check if user to remove is actually a member
            if (organization.members.length === 0) {
                return res.status(404).json({ error: "User is not a member of this organization" });
            }

            // prevent leader from removing themselves
            if (userIdToRemove === currentUserId) {
                return res.status(400).json({ error: "Organization leader cannot remove themselves" });
            }

            // remove user from organization
            await prisma.organization.update({
                where: { id: organizationId },
                data: {
                    members: {
                        disconnect: { id: userIdToRemove }
                    }
                }
            });

            res.status(200).json({ message: "User removed successfully" });

        } catch (error) {
            console.error('Remove member error:', error);
            
            if (error.code === 'P2025') {
                return res.status(404).json({ error: "Organization or user not found" });
            }
            
            res.status(500).json({ error: "Internal server error" });
        }
    }
};

module.exports = organizationController;