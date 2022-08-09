// first challenge Dolphins and Koalas

const calcAverage = (score1, score2, score3) => {
  return (score1 + score2 + score3) / 3;
};

const avgDolphins = calcAverage(44, 23, 71);
const avgKoalas = calcAverage(85, 54, 41);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins > avgKoalas) {
    return `Dolphins win ${avgDolphins} vs. ${avgKoalas}`;
  } else if (avgDolphins < avgKoalas) {
    return `Koalas win ${avgKoalas} vs. ${avgDolphins}`;
  } else {
    return "Tie";
  }
};

console.log(checkWinner(avgDolphins, avgKoalas));
