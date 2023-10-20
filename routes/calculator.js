const express = require('express');

const {
  add,
  subtract,
  multiply,
  divide,
  power,
  sqrRoot,
} = require('../controllers/calculator');

const router = express.Router();

router.route('/add').post(add);
router.route('/subtract').post(subtract);
router.route('/multiply').post(multiply);
router.route('/divide').post(divide);
router.route('/power').post(power);
router.route('/sqr-root').post(sqrRoot);

module.exports = router;
