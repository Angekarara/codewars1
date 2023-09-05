function persistence(num) {
    let count = 0;
  
    while (num >= 10) {
      num = multiplyDigits(num);
      count++;
    }
  
    return count;
  }
  
  function multiplyDigits(num) {
    let result = 1;
    while (num > 0) {
      result *= num % 10;
      num = Math.floor(num / 10);
    }
    return result;
}