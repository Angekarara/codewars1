const reverseSeq = (n) => {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result;
};
console.log(reverseSeq(8));
console.log(reverseSeq(54));
console.log(reverseSeq(2990));
