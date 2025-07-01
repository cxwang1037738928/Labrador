// middleware/auth.js

const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;


const authenticateJWT = (req, res, next) => {


    const authHeader = req.header('authorization');
    if (!(authHeader) || authHeader.startsWith('Bearer ')) {
        return res.status(401).json({error: "No valid authorization token found"});
    }

    const token = authHeader.split(' ')[1]

    if (!token){return res.status(401).json({error: "Invalid token format, must be Bearer: "})}

    // Verify the webtoken with jsonwebtoken
    // the token deciphers into the user's role
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err){
            return res.status(403).json({error: "Token is invalid or expired"})
        }

        req.user = user;

        next();

    }
    );

};

module.exports = {
    authenticateJWT
};