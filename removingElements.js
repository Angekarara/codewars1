function removeEverySecond(array) {
    const result = array.filter((element, index) => index % 2 === 0)
    return result;
  }
  
  console.log(removeEverySecond(["Keep", "Remove", "Keep", "Remove", "Keep", "Remove"])); // Output: ["Keep", "Keep", "Keep"]
  