
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');



const User = require('../models/Users');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await
      User
        .findOne({ email })
        .select('+password')
        .exec();

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(200).json({ token });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.create({ email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN
    });

    res.status(201).json({ token });
  }
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { login, register };



