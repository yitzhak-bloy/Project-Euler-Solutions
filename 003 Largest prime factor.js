const largestPrimeFactor = (num) => {

  let allNumbersBelowNum = [];
  let allPrimeFactorsOfNum = [];

  console.log(allNumbersBelowNum)

  let allPrimesBelowNum = allNumbersBelowNum.filter((value) => {

    for (let x = 2; x < value; x ++) {
      if (value % x === 0) {
      return false
      }
    }
    return true
  });

  // const did = (d) => {
  //   if (num % d === o) {
  //     allPrimeFactorsOfNum.push(d)
  //     num = d
  //     did(d)
  //   }
  // }

  // for (let i = 0; i < allPrimesBelowNum.length; i++) {
  //   did(allPrimesBelowNum[i])
  // }

  console.log('allPrimesBelowNum:', allPrimesBelowNum)
  console.log('allPrimesBelowNum:', allPrimesBelowNum)
}

largestPrimeFactor(100);