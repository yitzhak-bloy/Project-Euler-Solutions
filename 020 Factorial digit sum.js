/*
n! means n × (n − 1) × ... × 3 × 2 × 1

For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

Find the sum of the digits in the number 100!
*/

const sumFactorialDigits = (n) => {
  let sumOfFactorial = 1;

  // Calculate the factorial of the given number
  for (let i = n; i > 0; i--) {
    sumOfFactorial = BigInt(sumOfFactorial) * BigInt(i)
  }

  // Returns the sum of the Factorial digits
  return sumOfFactorial.toString().split('').reduce((sum, number) => Number(sum) + Number(number))

}
  
sumFactorialDigits(100);