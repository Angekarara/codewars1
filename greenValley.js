function makeValley(arr) {
    arr.sort((a, b) => b - a); // Sort the array in descending order
  
    const leftWing = [];
    const rightWing = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        rightWing.push(arr[i]);
      } else {
        leftWing.unshift(arr[i]);
      }
    }
  
    return rightWing.concat(leftWing); // Concatenate right wing and reversed left wing
  }