/*
The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ?
*/

const largestPrimeFactor = (num) => {
  let allNumbersBelowNum = [];
  let allPrimeFactorsOfNum = [];

  // Pushing all numbers below 10000 (and not above so as not to cause the software to crash).
  for (let i = 2; i < 10000; i++) {
    allNumbersBelowNum.push(i)
  }

  // Filter allNumbersBelowNum to have only the Primes numbers.
  let allPrimesBelowNum = allNumbersBelowNum.filter((value) => {

  // Checking for any number if it divides by another number that is not itself or one.
    for (let i = 2; i < value; i++) {
      if (value % i === 0) {
        return false
      }
    }
    return true
  })

  // Find the Prime numbers to which the given number is divided, and put it in the array.
  for (let x = 0; x < allPrimesBelowNum.length; x++) {
    if (num % allPrimesBelowNum[x] === 0) {
      allPrimeFactorsOfNum.push(allPrimesBelowNum[x])
    }
  }

  // Find the largest number from the allPrimeFactorsOfNum array.
  return Math.max(...allPrimeFactorsOfNum);
}

largestPrimeFactor(13195);