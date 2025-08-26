// middleware/validation.js


const validation = {


    // validation middleware for validating auth/register
  validateRegister(req, res, next) {
    const { name, email, password } = req.body; // payload of auth/register
    
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' }); // password length specifier
    }
    
    if (!/\S+@\S+\.\S+/.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' }); // email format specifier
    }
    
    next();
  },

  // validation middleware for validating auth/login, checks if email and password as present
  validateLogin(req, res, next) {
    const { email, password } = req.body; // since auth/login requires email and password
    
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
    
    next();
  },

  // validates the existence of the activation key for auth/activate
  validateActivate(req, res, next) {
    const { email, activation_key } = req.body;
    // TODO: add more thorough validation of the activation key
    if (!email || !activation_key) {
      return res.status(400).json({ error: 'Email and activation key are required' });
    }
    
    next();
  },

  // validates the existence of the email email for auth/reset
  validateEmail(req, res, next) {
    const { email } = req.body;
    
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }
    
    next();
  },

  // validates the password reset token for auth/reset/:resetToken
  validatePasswordReset(req, res, next) {
    const { email, new_password } = req.body;
    const { resetToken } = req.params;
    
    if (!email || !new_password || !resetToken) {
      return res.status(400).json({ error: 'Email, new password, and reset token are required' });
    }
    
    if (new_password.length < 6) {
      return res.status(400).json({ error: 'Password must be at least 6 characters long' });
    }
    
    next();
  }
};



module.exports = validation;