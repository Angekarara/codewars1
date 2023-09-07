function sumDigits(number) {
    const digits = Math.abs(number).toString().replace(/\D/g, '');
  
    let sum = 0;
  
    for (let i = 0; i < digits.length; i++) {
      sum += parseInt(digits[i]);
    }
  
    return sum;
  }
  console.log(sumDigits(23))