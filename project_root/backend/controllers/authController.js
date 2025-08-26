// controllers/authController.js

// controllers for the routes/auth.js file, utilizing validation middleware from middleware/validation.js

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const emailService = require('../utils/emailService');
const { generateActivationToken, generateResetToken } = require('../utils/tokens');

const authController = {
    // function for auth/register API
  async register(req, res) {
    try {
      const { name, email, password } = req.body;

      // check if user already exists in database
      const existingUser = await prisma.user.findUnique({
        where: { email }
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists with this email' });
      }

      // hash password
      const hashedPassword = await bcrypt.hash(password, 12);

      // create user, set isActive to false and generates a token for activation
      const user = await prisma.user.create({
        data: {
          name,
          email,
          password: hashedPassword,
          role: 'user',
          points: 0,
          suspicious: false,
          isActive: false, 
          activationToken: generateActivationToken()
        }
      });

      // send activation email
      await emailService.sendActivationEmail(email, user.activationToken);

      res.status(201).json({
        message: 'User registered successfully. Please check your email to activate your account.',
        userId: user.id
      });

    } catch (error) {
      console.error('Registration error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },


  // function for auth/activate
  async activate(req, res) {
    try {
      const { email, activation_key } = req.body;

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' }); // check if user exists
      }

      if (user.isActive) {
        return res.status(400).json({ error: 'Account is already activated' }); // check if account is already active
      }

      if (user.activationToken !== activation_key) {
        return res.status(400).json({ error: 'Invalid activation key' }); // validate activation key, not included in validation middleware
      }

      // activate the user
      await prisma.user.update({
        where: { id: user.id },
        data: {
          isActive: true,
          activationToken: null
        }
      });

      res.status(200).json({ message: 'Account activated successfully' });

    } catch (error) {
      console.error('Activation error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function for auth/login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      // find user
      const user = await prisma.user.findUnique({
        where: { email },
        include: { profile: true }
      });

      if (!user || !user.isActive) {
        return res.status(401).json({ error: 'Invalid credentials or account not activated' });
      }

      // check password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }

      // update last login
      await prisma.user.update({
        where: { id: user.id },
        data: { lastlogin: new Date() }
      });

      // generate JWT token
      const token = jwt.sign(
        { 
          userId: user.id, 
          email: user.email,
          role: user.role 
        },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
      );

      res.status(200).json({
        message: 'Login successful',
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          points: user.points
        }
      });

    } catch (error) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function for auth/reset
  async requestPasswordReset(req, res) {
    try {
      const { email } = req.body;

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // generate reset token
      const resetToken = generateResetToken();
      const resetTokenExpiry = new Date(Date.now() + 3600000); // 1 hour from now

      // store reset token in database
      await prisma.user.update({
        where: { id: user.id },
        data: {
          resetToken,
          resetTokenExpiry
        }
      });

      // send reset email
      await emailService.sendPasswordResetEmail(email, resetToken);

      res.status(200).json({ message: 'Password reset email sent' });

    } catch (error) {
      console.error('Password reset request error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  // function for auth/reset/:resetToken
  async resetPassword(req, res) {
    try {
      const { resetToken } = req.params;
      const { email, new_password } = req.body;

      const user = await prisma.user.findUnique({
        where: { email }
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      // check if reset token is valid and not expired
      if (user.resetToken !== resetToken || new Date() > user.resetTokenExpiry) {
        return res.status(400).json({ error: 'Invalid or expired reset token' });
      }

      // hash new password
      const hashedPassword = await bcrypt.hash(new_password, 12);

      // update password and clear reset token
      await prisma.user.update({
        where: { id: user.id },
        data: {
          password: hashedPassword,
          resetToken: null,
          resetTokenExpiry: null
        }
      });

      res.status(200).json({ message: 'Password reset successfully' });

    } catch (error) {
      console.error('Password reset error:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }
};

module.exports = authController;