/*
A perfect number is a number for which the sum of its proper divisors is exactly equal to the number. 
For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which means that 28 is a perfect number.

A number n is called deficient if the sum of its proper divisors is less than n and it is called abundant if this sum exceeds n.

As 12 is the smallest abundant number, 1 + 2 + 3 + 4 + 6 = 16, the smallest number that can be written as the sum of two abundant numbers is 24. 
By mathematical analysis, it can be shown that all integers greater than 28123 can be written as the sum of two abundant numbers. 
However, this upper limit cannot be reduced any further by analysis even though it is known that the greatest number that cannot be expressed as the sum of two abundant numbers is less than this limit.

Find the sum of all the positive integers which cannot be written as the sum of two abundant numbers.
*/

const abundantCheck = (num) => {
  let properDivisors = []
  let sumProperDivisors = 0

  for (let x = 1; x < num; x++) {
    if (num % x === 0) {
      properDivisors.push(x)
    }
  }

  if (properDivisors.length) {
    sumProperDivisors = properDivisors.reduce((x, y) => x + y);
  }
  
  if (sumProperDivisors > num) {
    return true;
  }
}

const sumOfNonAbundantNumbers = (n) => {
  let sumNumbers = (n * (n + 1)) / 2;
  let abundant = [];

  for (let i = 0; i <= n; i++) {
    if (abundantCheck(i)) {
      abundant.push(i)
    };
  };

  let twoAbundant = [];

  for (let z = 0; z < abundant.length; z++) {
    for (let z2 = z; z2 < abundant.length; z2++) {
      if (abundant[z] + abundant[z2] <= n) {
        twoAbundant.push(abundant[z] + abundant[z2])
      };
    };
  };

  let withoutDuplicate = [...new Set(twoAbundant)];
  let sumTwoAbundant = withoutDuplicate.reduce((z, y) => z + y);
  
  return sumNumbers - sumTwoAbundant; 
}

sumOfNonAbundantNumbers(28123);