// declare a variable
let temp = -40;
Celsius = temp;

// formula for converting from Celsius to Fahrenheit
const Fahrenheit = (Celsius * 9 / 5) + 32;

// Printing both values
console.log(`Converting ${Celsius}C to Fahrenheit, we should have: ${Fahrenheit}F`);

let numArr = [1, 2, 3, 4, 5];
let figArr = numArr;

figArr[1] = 8;
console.log(figArr);
console.log(numArr.length);