const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);

const bills = [124, 48, 268];

const tips1 = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const tips2 = [
  calcTip(bills[0] + tips1[0]),
  calcTip(bills[1] + tips1[1]),
  calcTip(bills[2] + tips1[2]),
];

const tips = bills.map(calcTip);
console.log(tips);
console.log(tips1);
console.log(tips2);
