const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

const User = require('../models/user.model');
const { Response } = require('../utils/Response');

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

const loginHandler = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(400).json(Response({ isSuccess: false, message: 'User Not found' }));

    const isCorrectPass = await bcrypt.compare(password, existingUser.password);
    if (!isCorrectPass)
      return res.status(400).json(Response({ isSuccess: false, message: 'Incorrent Password' }));

    const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json(
      Response({
        isSuccess: true,
        message: 'Login successful',
        data: { ...existingUser._doc, token },
      }),
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json(Response({ isSuccess: false, message: 'Something went wrong' }));
  }
};

module.exports = { loginHandler };
