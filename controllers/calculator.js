function getErrorResponse(error) {
  return {
    status: 'fail',
    message: error.message,
  };
}

function getResponse(result) {
  return {
    status: 'success',
    data: {
      result,
    },
  };
}

exports.add = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const sum = num1 + num2;

    res.status(200).json(getResponse(sum));
  } catch (err) {
    res.status(410).json(getErrorResponse(err));
  }
};

exports.subtract = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const difference = num1 - num2;

    res.status(200).json(getResponse(difference));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};

exports.multiply = (req, res) => {
  try {
    const { num1, num2 } = req.body;
    const product = num1 * num2;

    res.status(200).json(getResponse(product));
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

    const quotient = num1 / num2;

    res.status(200).json(getResponse(quotient));
  } catch (err) {
    res.status(400).json(getErrorResponse(err));
  }
};
