function array(string) {
    const sequences = string.split(',');
  
    if (sequences.length <= 2) {
      return null;
    }
  
    sequences.shift();
    sequences.pop();
  
    return sequences.join(' ');
  }
  console.log(array("1,2,3,4"));