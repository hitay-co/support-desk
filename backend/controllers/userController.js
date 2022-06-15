const asyncHandler = require('express-async-handler');

// @desc Register a New User
// @route /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // simple validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.send('Register Route');
});

// @desc Login a  User
// @route /api/users/login
// @access Public
const loginUser = asyncHandler(async (reg, res) => {
  res.send('Login Route');
});

module.exports = {
  registerUser,
  loginUser,
};
