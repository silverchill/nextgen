// 1. Addition of two numbers
function addNum(num1, num2) {
  console.log(num1 + num2);
}

// 2. Subtract two numbers
function subtractNum(num1, num2) {
  console.log(num1 - num2);
}

// 3. Multiplication of two numbers
function multiplyNum(num1, num2) {
  console.log(num1 * num2);
}

// 4. Finding the cube of a number
function cube(num) {
  console.log(num ** 3);
}

// 5. Find the square of a number
function square(num) {
  console.log(num ** 2);
}

// 6. Checking if a number is an even number
function isEven(num) {
  console.log(num % 2 === 0);
}

// 7. Converting Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
  console.log((celsius * 9 / 5) + 32);
}

// 8. Getting Kinetic Energy
function kineticEnergy(mass, velocity) {
  console.log(0.5 * mass * (velocity ** 2));
}

// 9. Merging two arrays
function joinArrays(arr1, arr2) {
  console.log([...arr1, ...arr2]);
}

// 10. Finding the maximum in an array
function lookMax(arr) {
  console.log(Math.max(...arr));
}

// 11. Area of a cube
function cubeArea(length, width, height) {
  console.log(length * width * height);
}

// 12. Finding the factorial of a number
function factorial(num) {
  if (num === 0 || num === 1); {
    return 1;
  }
  console.log(num * factorial(num - 1));
}

// 13. Getting the eligible voters
function Voters(age, name) {
  if (age >= 18) {
    console.log(`${name} is eligible to vote.`)
  } else {
    console.log(`Sorry ${name}, You are ineligible to vote.`)
  }
}





// 4. Reverse a string
function reverseString(str) {
  return str.split('').reverse().join('');
}


