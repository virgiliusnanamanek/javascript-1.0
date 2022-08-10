// generate an array called bills with the given values: [22, 295, 176, 440, 37, 105, 10, 1100, 86,52]

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//generate two different empty arrays called tips and totals

const tips = [];
const totals = [];

// generate a function called calcTip to calculate the tip and total values(bill + tip) for each bill. Use for  loop to perform the 10 calculations.

const calcTip = (bill) => {
  return bill >= 50 && bill <= 300 ? (bill *= 0.15) : (bill *= 0.2); // if bill is between 50 and 300, tip is 15% of bill, otherwise tip is 20% of bill
};

// use for loop to perform the 10 calculations.
for (let i = 0; i < bills.length; i++) {
  tips[i] = calcTip(bills[i]); //calculate the tip for each bill
  totals[i] = bills[i] + tips[i]; //calculate the total for each bill and add the tip to the bill.
}

// print the results to the console.
console.log(tips);
console.log(totals);
