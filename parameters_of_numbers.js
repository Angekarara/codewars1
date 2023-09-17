function parameter(n) {
    //coding and coding..
    const digits = Array.from(String(n), Number);
      const digitSum = digits.reduce((sum, digit) => sum + digit, 0);
      const digitProduct = digits.reduce((product, digit) => product * digit, 1);
      
      const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
      const lcm = (digitSum * digitProduct) / gcd(digitSum, digitProduct);
      
      return lcm;
    
  }
  console.log(parameter(1234)); // Output: 120
  console.log(parameter(3456));// Output: 360