const port = process.env.PORT || 3000; // Use Railway's PORT or default to 3000


const express = require("express");
const app = express();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const path = require('path');
const {PrismaClient} = require("./generated/prisma");
const prisma = new PrismaClient();


// Middlewares
app.use(express.json());

const cors = require("cors"); 

// Configure CORS to allow only the frontend origin
const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173"; 
app.use(
  cors({
    origin: FRONTEND_URL, // Restrict requests to this origin
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"], // Adjust base on needs
    credentials: true, // Enable if using cookies/sessions
  })
);


const authenticateJWT = require('./middleware/auth');
const {rolesHierarchy, checkRole} = require('./middleware/roles')

// Mount routes

const userRoutes = require('./routes/user');
app.use('/user', userRoutes);

const organizationRoutes = require('./routes/organization');
app.use('/organization', organizationRoutes);

const authRoutes = require('./routes/auth');
app.use('/auth', authRoutes);

const imageRoutes = require('./routes/image')
app.use('/image', imageRoutes)









const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

server.on('error', (err) => {
    console.error(`cannot start server: ${err.message}`);
    process.exit(1);
});