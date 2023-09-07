function powerOf4(n) {
    if (typeof n !== "number" || !Number.isInteger(n) || n <= 0) {
      return false;
    }
    
    while (n !== 1) {
      if (n % 4 !== 0) {
        return false;
      }
      n = n / 4;
    }
    
    return true;
  }
  console.log(powerOf4(16))
  console.log(powerOf4(34))