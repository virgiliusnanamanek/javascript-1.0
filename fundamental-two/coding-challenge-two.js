const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);

const bills = [124, 48, 268];

const tips = bills.map(calcTip);
console.log(tips);
