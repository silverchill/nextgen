// 1. Addition of two numbers
const addNum = function(num1, num2) {
  console.log(num1 + num2);
}

// 2. Subtraction of two numbers
const subtractNum = function (num1, num2) {
  console.log(num1 - num2);
}

// 3. Multiplication of two numbers
const multiplyNum = function (num1, num2) {
  console.log(num1 * num2);
}

// 4. Finding the cube of a number
const cube = function (num) {
  console.log(num ** 3);
}

// 5. Find the square of a number
const square = function(num) {
  console.log(num ** 2);
}

// 6. Checking if a number is an even number
const isEven = function(num) {
  console.log(num % 2 === 0);
}

// 7. Converting Celsius to Fahrenheit
const celsiusToFahrenheit = function(celsius) {
  console.log((celsius * 9/5) + 32);
}

// 8. Getting Kinetic Energy
const kineticEnergy = function(mass, velocity) {
  console.log(0.5 * mass * (velocity ** 2));
}

// 9. Merging two arrays
const joinArrays = function (arr1, arr2) {
  console.log([...arr1, ...arr2]);
}

// 10. Finding the maximum in an array
const lookMax = function(arr) {
  console.log(Math.max(...arr));
}

// 11. Area of a cube
const cubeArea = function(length, width, height) {
  console.log(length * width * height);
}

// 12. Finding the factorial of a number
const factorial = function(num) {
  if (num === 0 || num === 1); {
    return 1;
  }
  console.log(num * factorial(num - 1));
}

// 13. Getting the eligible voters
const Voters = function(age, name) {
  if (age >= 18) {
    console.log(`${name} is eligible to vote.`)
  } else {
    console.log(`Sorry ${name}, You are ineligible to vote.`)
  }
}

// 14. To get the average of students
const calculateAve = function(numbers) {
  if (numbers.length === 0) {
      console.log(0); // I handled empty arrays here
      return;
  }
  const sum = numbers.reduce((total, numb) => total + numb, 0);
  console.log(sum / numbers.length);
}





// 11. Sort an array in ascending order
const sortArray = function(arr) {
  return arr.sort((a, b) => a - b);
};

// 12. Find the average of an array
const average = function(arr) {
  const sum = arr.reduce((acc, curr) => acc + curr, 0);
  return sum / arr.length;
};

// 13. Count the number of vowels in a string
const countVowels = function(str) {
  return (str.match(/[aeiou]/gi) || []).length;
};

// 14. Check if a number is prime
const isPrime = function(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
  }
  return true;
};
