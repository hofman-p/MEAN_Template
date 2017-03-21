"use strict";

const express = require('express');
const path = require('path');
const router  = express.Router();

// API
require('../config/mongoose');
router.use('/api/users', require('./api/users'));

// Allows to couple AngularJS routing with the server by calling its index.html
router.all('*', function(req, res, next) {
  //res.sendFile('/../public/index.html', { root: __dirname });
  res.sendFile(path.join(__dirname + '/../public/index.html'));
});

module.exports = router;
