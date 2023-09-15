function numbersWithDigitInside(x, d) {
    let numbers = [];
  
    for (let i = 1; i <= x; i++) {
      if (String(i).includes(String(d))) {
        numbers.push(i);
      }
    }
  
    if (numbers.length === 0) {
      return [0, 0, 0];
    }
  
    let count = numbers.length;
    let sum = numbers.reduce((a, b) => a + b);
    let product = numbers.reduce((a, b) => a * b);
  
    return [count, sum, product];
  }
  console.log(numbersWithDigitInside(3,6))
  console.log(numbersWithDigitInside(9,5))