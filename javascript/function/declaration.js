// Finding the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return (num * factorial(num - 1));
}
console.log(factorial(3))


// Getting the eligible voters
function Voters(age, name) {
  if (age >= 18) {
    console.log(`${name} is eligible to vote.`)
  } else {
    console.log(`Sorry ${name}, You are ineligible to vote.`)
  }
}
Voters(17, 'Debby_rise')


// Addition of two numbers
function addNum(num1, num2) {
  console.log(num1 + num2);
}
addNum(5, 3)


// Merging two arrays
function joinArrays(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}
joinArrays([0, 1, 3, 7], [9, 10, 33])


// Subtract two numbers
function subtractNum(num1, num2) {
  console.log(num1 - num2);
}
subtractNum(5, 3)


// Division of numbers
function divideNum(num1, num2) {
  if (num2 === 0) { // Avoid dividing by 0, as it is undefined
    console.log("undefined");
  } else {
    console.log(num1 / num2);
  }
}
divideNum(8, 2)


// Converting Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  console.log((celsius * 9 / 5) + 32);
}
celsiusToFahrenheit(-40)


// Multiplication of two numbers
function multiplyNum(num1, num2) {
  console.log(num1 * num2);
}
multiplyNum(5, 3)


// Finding the cube of a number
function cube(num) {
  console.log(num ** 3);
}
cube(5)


// Find the square of a number
function square(num) {
  console.log(num ** 2);
}
square(5)


// Checking if a number is an even number
function isEven(num) {
  console.log(num % 2 === 0);
}
isEven(5)


// Getting Kinetic Energy
function kineticEnergy(mass, velocity) {
  console.log(0.5 * mass * (velocity ** 2));
}
kineticEnergy(5,3)


// Finding the maximum in an array
function lookMax(arr) {
  console.log(Math.max(...arr));
}
lookMax([5,4,9,1])


// Area of a cube
function cubeArea(length, width, height) {
  console.log(length * width * height);
}
cubeArea(5, 4, 3)


// Area of a circle
function circleArea(radius) {
  console.log(Math.PI * radius ** 2);
}
circleArea(5)


// To convert lower string to Upper case
function upper(letter) {
  console.log(letter.toUpperCase());
}
upper('stephen')



// To get the average of students
function calculateAve(numbers) {
  if (numbers.length === 0) {
      console.log(0); // I handled empty arrays here
      return;
  }
  const sum = numbers.reduce((total, numb) => total + numb, 0);
  console.log(sum / numbers.length);
}
calculateAve([1, 3, 6, 3])


