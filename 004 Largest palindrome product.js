/*
A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers.
*/

const largestPalindromeProduct = (n) => {

  let asas = []

  const check = (num) => {
    // console.log(num)
    const numAtString = num.toString();
    const numericInReverse = numAtString.split('').reverse().join('')
    return numAtString === numericInReverse
  }

  for (let i = 999; i > 100; i--) {
    for (let x = 999; x >= i; x--) {

      asas.push({i: i, x: x, ix: i*x})
      // console.log('i', i, 'x', x, 'i*x', i*x)
      if (check(i * x)) {
        console.log(asas)

        // console.log(i*x, 'הצלחנו')
        return i * x
      }
    }
  }
}

largestPalindromeProduct(3);