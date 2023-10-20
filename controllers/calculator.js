function getErrorResponse(error) {
  return {
    status: 'fail',
    message: error.message,
  };
}

function getResponse(result) {
  return {
    status: 'success',
    result,
  };
}

exports.add = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const computation = num1 + num2;

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(410).json(getErrorResponse(err));
  }
};

exports.subtract = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const computation = num1 - num2;

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};

exports.multiply = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const computation = num1 * num2;

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};

exports.divide = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    if (num2 === 0) {
      throw new Error('Division by 0 is not allowed');
    }

    const computation = num1 / num2;

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};

exports.power = (req, res) => {
  try {
    const { num, power } = req.body;

    const computation = num ** power;

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};

exports.sqrRoot = (req, res) => {
  try {
    const { num } = req.body;
    if (num < 0) {
      throw new Error('Number must be greater than or equal to 0');
    }

    const computation = num ** (1 / 2);

    res.status(200).json(getResponse(computation));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};
