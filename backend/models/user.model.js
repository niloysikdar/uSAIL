const mongoose = require('mongoose');

const dotenv = require('dotenv');
dotenv.config();

const SALT_WORK_FACTOR = +process.env.SALT_WORK_FACTOR;

const userSchema = mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  const user = this;
  if (!user.isModified('password')) {
    return next();
  }

  const hashedPass = await bcrypt.hash(user.password, SALT_WORK_FACTOR);
  user.password = hashedPass;

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
