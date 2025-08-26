// utils/tokens.js

const crypto = require('crypto');

function generateActivationToken() {
  return crypto.randomBytes(20).toString('hex');
}

function generateResetToken() {
  return crypto.randomInt(100000, 999999).toString(); // 6-digit code
}

module.exports = {
  generateActivationToken,
  generateResetToken
};