// middleware/auth.js

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const authenticateJWT = async (req, res, next) => {
    try {
        const authHeader = req.header('authorization');
        
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ error: "No valid authorization token found. Format: Bearer <token>" });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: "Invalid token format" });
        }

        // verify the token
        const decoded = jwt.verify(token, JWT_SECRET);
        
        // check if user still exists and is active in database
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                isActive: true
            }
        });

        if (!user || !user.isActive) {
            return res.status(403).json({ error: "User not found or account inactive" });
        }

        // attach user information to request
        req.user = user;
        next();

    } catch (error) {
        console.error('JWT Authentication error:', error);
        
        if (error.name === 'JsonWebTokenError') {
            return res.status(403).json({ error: "Invalid token" });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(403).json({ error: "Token expired" });
        }
        
        return res.status(500).json({ error: "Internal server error during authentication" });
    }
};

module.exports = {
    authenticateJWT
};