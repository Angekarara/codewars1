const  uniqueInOrder = function(iterable) {
    let uniqueList = [];
    let previousItem = null;
  
    for (let i = 0; i < iterable.length; i++) {
      let currentItem = iterable[i];
      
      if (currentItem !== previousItem) {
        uniqueList.push(currentItem);
        previousItem = currentItem;
      }
    }
  
    return uniqueList;
}