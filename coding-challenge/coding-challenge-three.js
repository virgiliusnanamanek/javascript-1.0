// dolphine and koala team

const scoreDolphine = (100 + 87 + 90 + 95 + 100) / 5;
const scoreKoala = (100 + 87 + 90 + 95 + 100) / 5;

if (scoreDolphine > scoreKoala) {
  console.log("Dolphine's team is the winner");
} else if (scoreKoala === scoreDolphine) {
  console.log("Dolphine's team and Koala's team are tied");
} else {
  console.log("Koala's team is the winner");
}
