/*
Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly into n).
If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are called amicable numbers.

For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

Evaluate the sum of all the amicable numbers under 10000.
*/

// Calculate the sum of proper divisors of the given number
const sumOfProperDivisors = (num) => {
  let arrOfProperDivisors = [];

  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arrOfProperDivisors.push(i)
    }
  }

  // Returns the sum of all divisors in arrOfProperDivisors
  return arrOfProperDivisors.reduce((sum, number) => sum + number);
}

const sumAmicableNum = (n) => {
  let allAmicableNumbers = []

  for (let x = 2; x < n; x++) {
    if (sumOfProperDivisors(x) > 1) {
      if (x === sumOfProperDivisors(sumOfProperDivisors(x)) && sumOfProperDivisors(x) !== sumOfProperDivisors(sumOfProperDivisors(x))) {
        allAmicableNumbers.push(sumOfProperDivisors(x), sumOfProperDivisors(sumOfProperDivisors(x)))
      }
    }
  }

  return allAmicableNumbers.reduce((sum, number) => sum + number)/2;
}
  
sumAmicableNum(10000);