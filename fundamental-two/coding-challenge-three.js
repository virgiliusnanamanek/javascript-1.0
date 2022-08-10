// Mark Miller
const markMillerObject = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

//John Smith

const johnSmithObject = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  },
};

johnSmithObject.calcBMI();
markMillerObject.calcBMI();

if (johnSmithObject.bmi > markMillerObject.bmi) {
  console.log(
    `${johnSmithObject.fullName} BMI ${johnSmithObject.bmi} is higher than ${markMillerObject.fullName} BMI ${markMillerObject.bmi}`
  );
} else {
  console.log(
    `${markMillerObject.fullName} BMI ${markMillerObject.bmi} is higher than ${johnSmithObject.fullName} BMI ${johnSmithObject.bmi}`
  );
}
