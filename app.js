const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5555;
const mongodb = process.env.MONGO_URL

app.use(express.json());


mongoose.connect(mongodb)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/api', require('./route'));

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
