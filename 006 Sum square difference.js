/*
The sum of the squares of the first ten natural numbers is,
12+22+...+102=385
The square of the sum of the first ten natural numbers is,
(1+2+...+10)2=552=3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025−385=2640.
Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const sumSquareDifference = (n) => {
  let allNumbers = [];

  // The insertion of all numbers up to n into one array
  for (let i = 1; i <= n; i++) {
    allNumbers.push(i)
  }
  
  // Multiplying each number by itself and connecting all results
  const sumSquares = allNumbers.reduce((lastResult, currentValue) => {
    return lastResult + currentValue * currentValue;
  })

  // Connecting all numbers up to n
  const sumOfNumbers = allNumbers.reduce((lastResult, currentValue) => {
    return lastResult + currentValue;
  })

  // Multiply sumOfNumbers by itself
  const squareSum = sumOfNumbers * sumOfNumbers;

  // Returns the subtraction of sumSquares from squareSum
  return squareSum - sumSquares;
}
  
sumSquareDifference(100);