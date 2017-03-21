"use strict";

const express       = require('express');
const app           = express();
const path          = require('path');
const favicon       = require('serve-favicon');
const morgan        = require('morgan');
const cookieParser  = require('cookie-parser');
const bodyParser    = require('body-parser');
const router        = express.Router();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// Logging errors
app.use(morgan('dev'));

// Allows to parse application/x-www-form-urlencoded as json
app.use(bodyParser.urlencoded({ extended: false }));
// Allows to get POST requests body
app.use(bodyParser.json());

// Maybe a future use...
app.use(cookieParser());

// Allows to use /public folder
app.use(express.static(path.join(__dirname, 'public')));

// Routing
app.use(require('./routes/index'));
//app.use('*', require('./routes/index'));

// Error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  console.error(err.message + ' | ' + err.statusCode);
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  if (err.statusCode === 404)
    return res.status(404).sendFile('public/index.html', { root: __dirname });
});

module.exports = app;
