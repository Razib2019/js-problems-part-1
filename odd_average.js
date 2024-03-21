/**
1. Function takes an array as parameter
2. Give me the average of the odd numbers in the array
 */

/**
1. Put odd numbers in an array
 */

function oddAverage(numbers) {
  const odds = [];
  for (number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  //   odds is the array that contains only the odd numbers
  let sum = 0;
  for (number of odds) {
    sum += number;
  }
  const count = odds.length;
  let average = sum / count;
  return average;
}

const numbers = [42, 13, 58, 65, 81, 96, 7];
const average = oddAverage(numbers);
console.log("Average of the odd numbers is: ", average);
