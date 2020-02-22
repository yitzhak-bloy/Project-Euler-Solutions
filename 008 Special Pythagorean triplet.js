/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
                                                       a^2 + b^2 = c^2
For example, 3^2 + 4^2 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
*/

const specialPythagoreanTriplet = (sumOfabc) => {

  // Goes over any existing 'a' digit
  for (let i = 1; i < sumOfabc; i++) {

    // Goes over any existing 'b' digit
    for (let x = i; x < sumOfabc; x++) {

      // Checker with has a Pythagorean triplet whose sum corresponds to the number inserted
      if (i+x+Math.sqrt(x*x+i*i) === sumOfabc) {

        // returns the product of abc
        return x*i*Math.sqrt(x*x+i*i)
      }
    }
  }
}

specialPythagoreanTriplet(1000);