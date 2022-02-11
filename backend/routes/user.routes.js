const express = require('express');
const router = express.Router();

const User = require('../models/user.model');
const { loginHandler } = require('../controllers/auth.controller');

router.get('/user', async (req, res) => {
  const users = await User.find({});
  return res.status(200).json(users);
});

router.post('/user/login', loginHandler);

module.exports = router;
