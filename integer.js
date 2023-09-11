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
console.log(finder.findSmallestInt([1,6,7,2]))