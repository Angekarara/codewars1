function outed(meet, boss) {
  meet[boss] *= 2; // Adjust boss's score (doubled)

  let totalScore = 0;
  let totalCount = 0;

  for (let member in meet) {
    totalScore += meet[member];
    totalCount++;
  }

  const averageRating = totalScore / totalCount;

  if (averageRating <= 5) {
    return 'Get Out Now!';
  } else {
    return 'Nice Work Champ!';
  }
}
console.log(outed(1,3))