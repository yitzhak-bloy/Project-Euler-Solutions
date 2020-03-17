/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

const longestCollatzSequence = (limit) => {
  let solution = [0, 3];

  const check = (num) => {
    let numOfchain = 0;
    let numInSequence = num;

    while (numInSequence > 1) {
      if (numInSequence % 2 === 0) {
        numOfchain++
        numInSequence = numInSequence/2
      } 
      else {
        numOfchain++
        numInSequence = numInSequence*3+1
      }
    }

    if (numOfchain > solution[0]) {
      solution[0] = numOfchain
      solution[1] = num
    }
  }

  for (let i = limit; i > 0; i--) {
    check(i)
  }
  return solution[1]
} 

longestCollatzSequence(1000000);