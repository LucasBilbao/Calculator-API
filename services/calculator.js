const controllers = require('../controllers/calculator');

module.exports = {
  CalculatorService: {
    CalculatorServicePort: {
      ...controllers,
    },
  },
};
