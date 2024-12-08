// 1. Addition of two numbers
const addNum = (num1, num2) => { console.log(num1 + num2); }

// 2. Subtract two numbers
const subtractNum = (num1, num2) => { console.log(num1 - num2); }

// 3. Multiplication of two numbers
const multiplyNum = (num1, num2) => { console.log(num1 * num2); }

// 4. Finding the cube of a number
const cube = num => { console.log(num ** 3); }

// 5. Find the square of a number
const square = (num) => { console.log(num ** 2); }

// 6. Checking if a number is an even number
const isEven = (num) => { console.log(num % 2 === 0); }

// 7. Converting Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => {
  console.log((celsius * 9/5) + 32);
}

// 8. Getting Kinetic Energy
const kineticEnergy = (mass, velocity) => {
  console.log(0.5 * mass * (velocity ** 2));
}

// 9. Merging two arrays
const joinArrays = (arr1, arr2) => { console.log([...arr1, ...arr2]) };

// 10. Finding the maximum in an array
const lookMax = (arr) => {
  console.log(Math.max(...arr));
}

// 11. Area of a cube
const cubeArea = (length, width, height) => {
  console.log(length * width * height);
}

// 12. Finding the factorial of a number
const factorial = (num) => {
  if (num === 0 || num === 1); {
    return 1;
  }
  console.log(num * factorial(num - 1));
}

// 13. Getting the eligible voters
const Voters = (age, name) => {
  if (age >= 18) {
    console.log(`${name} is eligible to vote.`)
  } else {
    console.log(`Sorry ${name}, You are ineligible to vote.`)
  }
}

// 14. To get the average of students
const calculateAve = (numbers) => {
  if (numbers.length === 0) {
      console.log(0); // I handled empty arrays here
      return;
  }
  const sum = numbers.reduce((total, numb) => total + numb, 0);
  console.log(sum / numbers.length);
}
