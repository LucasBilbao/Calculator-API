const express = require('express');

const {
  add,
  subtract,
  multiply,
  divide,
} = require('../controllers/calculator');

const router = express.Router();

router.route('/add').post(add);
router.route('/subtract').post(subtract);
router.route('/multiply').post(multiply);
router.route('/divide').post(divide);

module.exports = router;
