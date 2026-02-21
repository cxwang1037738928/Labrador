const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();



const roleHierarchy = {
    'user': 0,
    'cashier': 1,
    'manager': 2,
    'admin': 3
};


// Middleware to check the User's Role. The Roles are ['user', 'cashier', 'manager', 'admin']



// Returns an error if the user does not have authorization, otherwise moves onto next middleware
const checkRole = (role) = (req, res, next) => {

    const userRole = req.user.role ?? 'user'; // default to using user if no role

    if (roleHierarchy[userRole] < roleHierarchy[role]){
        return res.status(403).json({error: 'Forbidden'}); // user does not have clearance for the operation
    }

    next();


};


module.exports = {
    roleHierarchy,
    checkRole
};