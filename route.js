const express = require('express');
const route = express.Router();

route.use('/task', require('./router/task'))

module.exports = route