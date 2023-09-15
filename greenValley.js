function makeValley(arr) {
    arr.sort((a, b) => b - a); 
  
    const leftWing = [];
    const rightWing = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        rightWing.push(arr[i]);
      } else {
        leftWing.unshift(arr[i]);
      }
    }
  
    return rightWing.concat(leftWing); 
  }
  console.log(makeValley([3,5,1,2,9,6,4]))