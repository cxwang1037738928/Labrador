const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();



const roleHierarchy = {
    'user': 0,
    'cashier': 1,
    'manager': 2,
    'admin': 3
};


// Middleware to check the User's Role. The Roles are ['user', 'cashier', 'manager', 'admin']
// Compares the role in the request to 

const checkRole = (role) = (req, res, next) => {

    const userRole = req.user.role ?? 'user'; // default to using user if no role

    if (roleHierarchy[userRole] < roleHierarchy[role]){
        return res.status(403).json({error: 'Forbidden'}); // user does not have clearance for the operation
    }


};


module.exports = {
    roleHierarchy,
    checkRole
};