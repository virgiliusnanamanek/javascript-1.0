/**
 * generate a function to count the bill
 * tip = 15% of bill if the value of the bill is between 50 and 300. If the value is different, the tip is 20% of the bill.
 */

function calculateTip(bill) {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip *= 0.15;
  } else {
    tip *= 0.2;
  }
  return tip;
}

let tipCalculated = (bill) => {
  let tip;
  if (bill >= 50 && bill <= 300) {
    tip *= 0.15;
  } else {
    tip *= 0.2;
  }
  return tip;
};

let bill = 200;
let tip = bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2);
console.log(tip);
