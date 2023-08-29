function integrate(coefficient, exponent) {
    const Exponent = exponent + 1;
    const Coefficient = coefficient / Exponent;
    return `${Coefficient}x^${Exponent}`;
  }
  console.log(integrate(5, 0));