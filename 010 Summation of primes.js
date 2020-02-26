/*
The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million.
*/

const primeSummation = (n) => {
  let numbers = [];

  // Puts all numbers up to 'n' to 'numbers'
  for (let i = 0; i < n; i++) {
    numbers.push(i)
  }
  numbers[1] = 0;

  // Moves on all numbers to the root of the number n
  for (let x = 0; x < Math.sqrt(numbers.length); x++) {
    if (numbers[x] !== 0){

      // Goes over all numbers multiplied by x and sets them equal to 0
      for (let j = x*x; j < n; j += x) {
          numbers[j] = 0;
      }
    }
  }

  // Returns the sum of all prime numbers
  return numbers.reduce((lastResult, currentValue) => {
    return lastResult + currentValue;
  })
}

primeSummation(2000000);