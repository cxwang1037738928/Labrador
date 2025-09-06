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

// middleware to ensure authorization to only cashier or higher

const requireCashier = async (req, res, next) => {
    try {
        await authenticateJWT(req, res, () => {});
        
        if (!req.user) return; // authenticateJWT already handled the error
        
        const allowedRoles = ['cashier', 'manager', 'admin'];
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "Access denied. Cashier role or higher required." });
        }
        
        next();
    } catch (error) {
        console.error('RequireCashier middleware error:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// middleware to ensure authorization to only manager or higher

const requireManager = async (req, res, next) => {
    try {
        await authenticateJWT(req, res, () => {});
        
        if (!req.user) return;
        
        const allowedRoles = ['manager', 'admin'];
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({ error: "Access denied. Manager role or higher required." });
        }
        
        next();
    } catch (error) {
        console.error('RequireManager middleware error:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

// middleware to ensure authorization to only admin or higher

const requireAdmin = async (req, res, next) => {
    try {
        await authenticateJWT(req, res, () => {});
        if (!req.user) return; // terminate the program if invalid JWT

        const allowedRoles = ['admin'];
        if (!allowedRoles.includes(req.user.role)) {
            return res.status(403).json({error: "Access denied. Admin role only."})
        }
        
        next();
    } catch (error) {
        console.error('RequireAdmin middleware error:', error);
        res.status(500).json({ error: "Internal server error"});
    }


};

module.exports = {
    authenticateJWT,
    requireCashier,
    requireManager,
    requireAdmin
};