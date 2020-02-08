/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Find the sum of all the multiples of 3 or 5 below the provided parameter value number.
*/

const multiplesOf3and5 = (num) => {

  let numbersMultiplesOf3and5 = [];

  // Review all numbers below the given number
  for (let i = 0; i < num; i ++) {

  // Check for any number if it is multiples of 3 or 5
    if (Number.isInteger(i/3) || Number.isInteger(i/5)) {
      numbersMultiplesOf3and5.push(i)
    }
  }

  const sumOfNumbers = numbersMultiplesOf3and5.reduce((sum, number) => sum + number);

  return sumOfNumbers
} 