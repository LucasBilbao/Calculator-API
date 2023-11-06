function getErrorResponse(error) {
  return {
    status: 'fail',
    errorMessage: error.message,
  };
}

function getResponse(result) {
  return {
    status: 'success',
    result,
  };
}

exports.Add = (args) => {
  try {
    let { a, b } = args;
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('a and b must be numbers or numeric strings');
    }

    const computation = a + b;

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};

exports.Subtract = (args) => {
  try {
    let { a, b } = args;
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('a and b must be numbers or numeric strings');
    }

    const computation = a - b;

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};

exports.Multiply = (args) => {
  try {
    let { a, b } = args;
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('a and b must be numbers or numeric strings');
    }

    const computation = a * b;

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};

exports.Divide = (args) => {
  try {
    let { a, b } = args;
    a = Number.parseFloat(a);
    b = Number.parseFloat(b);
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw new Error('a and b must be numbers or numeric strings');
    }
    if (b === 0) {
      throw new Error('Division by 0 is not allowed');
    }

    const computation = a / b;

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};

exports.Power = (args) => {
  try {
    let { num, power } = args;
    num = Number.parseFloat(num);
    power = Number.parseFloat(power);
    if (Number.isNaN(num) || Number.isNaN(power)) {
      throw new Error('num and power must be numbers or numeric strings');
    }
    const computation = num ** power;

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};

exports.SqrRoot = (args) => {
  try {
    let { num } = args;
    num = Number.parseFloat(num);
    if (Number.isNaN(num)) {
      throw new Error('num must be a number or numeric string');
    }
    if (num < 0) {
      throw new Error('Number must be greater than or equal to 0');
    }
    const computation = num ** (1 / 2);

    return getResponse(computation);
  } catch (err) {
    return getErrorResponse(err);
  }
};
