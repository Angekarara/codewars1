function strongEnough(earthquake, age) {
  const initialStrength = 1000;
  const decayRate = 0.01;

  const buildingStrength = initialStrength * Math.pow(1 - decayRate, age);

  const earthquakeMagnitude = earthquake.reduce(
    (acc, shockwave) =>
      acc * shockwave.reduce((sum, tremor) => sum + tremor, 0),
    1
  );
  return buildingStrength >= earthquakeMagnitude
    ? "Safe!"
    : "Needs Reinforcement!";
}
const earthquake = [
  [2, 3, 1],
  [3, 1, 1],
  [1, 1, 2],
];
const age = 2;

const result = strongEnough(earthquake, age);

console.log(result);
