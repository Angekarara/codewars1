function removeEverySecond(array) {
    const result = array.filter((element, index) => index % 2 === 0)
    return result;
  }
  
  // Test case
  const originalArray = ["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"];
  const newArray = removeEverySecond(originalArray);
  console.log(newArray); // Output: ["Keep", "Keep", "Keep"]
  