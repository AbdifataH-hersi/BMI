// Good Luck! You got this 💪🏾
// Write your code here.


function calculateBMI(weight, height) {
    return weight / (height * height);
}

let aliBMI = calculateBMI(70, 1.75);
let mohamedBMI = calculateBMI(85, 1.80);

if (aliBMI > mohamedBMI) {
    console.log("Ali's BMI is higher");
} else if (mohamedBMI > aliBMI) {
    console.log("Mohamed's BMI is higher");
} else {
    console.log("Both have the same BMI");
}
