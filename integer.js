class SmallestIntegerFinder {
  findSmallestInt(array) {
    let smallest = array[0];
    for (let i = 1; i < array.length; i++) {
      if (array[i] < smallest) {
        smallest = array[i];
      }
    }

    return smallest;
  }
}

const finder = new SmallestIntegerFinder();
const array = [3, 1, 4, 1, 5, 9, 2, 6]; 
const result = finder.findSmallestInt(array);
console.log("Smallest Integer:", result);