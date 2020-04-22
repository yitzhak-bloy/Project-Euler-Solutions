/*
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10001st prime number?
*/

const nthPrime = (n) => {
  let PrimeNumbersList = [2];

  // Checks whether the number is prime
  const checkIfPrime = (number) => {
    for (let x = 0; x < PrimeNumbersList.length; x++) {
      if (number % PrimeNumbersList[x] === 0) {
        return false
      } 
    }
    return true
  }

  // Goes over all the numbers and puts them to the test 
  for (let i = 3; i < n*n; i++) {
    if (checkIfPrime(i)) {
      PrimeNumbersList.push(i)
    }

    // When it comes to n prime numbers returns the last number
    if (PrimeNumbersList.length === n) {
      return PrimeNumbersList[PrimeNumbersList.length - 1]
    }
  }

}
  
nthPrime(10001);  