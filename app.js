const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const calculatorRouter = require('./routes/calculator');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(
  cors({
    origins: ['http://localhost:1234', 'http://127.0.0.1:5500/'],
  }),
);

app.use('/api/v1/calculator', calculatorRouter);

module.exports = app;
