/*
2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

function smallestMult(n) {
  let checkDivided = [];

// Goes over all the numbers that are divided by n
  for (let x = n; x < 1000000000; x = x + n) {
    
// Initializes checkDivided to test each loop
    checkDivided = [];

// Passes all numbers from 1 to n and checks whether the number currently in the loop divides the numbers without residuals
    for (let i = 1; i <= n; i++) {
      if (x % i === 0) {
        checkDivided.push(i)
      } 

// Checks whether the number currently in the loop divides all numbers without residual and if so returns it
      if (checkDivided.length === n) {
        return x
      }
    } 
  }
}
    
smallestMult(20);