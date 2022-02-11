const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const dotenv = require('dotenv');
dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL;
const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.urlencoded({ limit: '25mb', extended: true }));
app.use(express.json({ limit: '25mb' }));
app.use(cors());

// Root endpoint
app.get('/', (req, res) => {
  res.send('Hello from Hackathon .......');
});

mongoose
  .connect(MONGODB_URL)
  .then(() => app.listen(PORT, () => console.log(`Server is running on PORT: ${PORT}`)))
  .catch((error) => console.log(error.message));
