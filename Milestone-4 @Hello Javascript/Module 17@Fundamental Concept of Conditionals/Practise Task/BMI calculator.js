let height = 1.65;
let weight = 55;
let BMI = weight / Math.pow(height, 2);
// console.log(BMI);

if (BMI < 18.5) {
    console.log("your BMI: " + BMI.toFixed(1) + " you are underweight.");
}
else {
    if (BMI >= 18.5 && BMI <= 24.9) {
        console.log("your BMI: " + BMI.toFixed(1) + " you are normal.");
    }
    else {
        if (BMI >= 25 && BMI <= 29.9) {
            console.log("your BMI: " + BMI.toFixed(1) + " you are overweight.");

        }
        else {
            console.log("your BMI: " + BMI.toFixed(1) + " you are obese.");
        }
    }
}