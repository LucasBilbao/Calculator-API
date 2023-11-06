const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(
  cors({
    origins: ['http://localhost:1234', 'http://127.0.0.1:5500/'],
  }),
);

module.exports = app;
