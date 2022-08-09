const marksHeight = 1.69;
const marksWeight = 70;
const johnsHeight = 1.95;
const johnsWeight = 92;

let marksBMI = marksWeight / (marksHeight * marksHeight);
let johnsBMI = johnsWeight / (johnsHeight * johnsHeight);

if (marksBMI > johnsBMI) {
  console.log("Marks BMI is higher than John's");
} else {
  console.log("John's BMI is higher than Marks's");
}
