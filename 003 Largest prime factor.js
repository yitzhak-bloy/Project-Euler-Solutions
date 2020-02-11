const largestPrimeFactor = (num) => {

  // let number = num;

  let allNumbersBelowNum = [2];
  let allPrimeFactorsOfNum = [];

  for (let i = 3; i < 10000; i++) {
    allNumbersBelowNum.push(i)
  }

  let allPrimesBelowNum = allNumbersBelowNum.filter((value) => {

    for (let x = 2; x < value; x ++) {
      if (value % x === 0) {
      return false
      }
    }
    return true
  })
  console.log('הראשונים כולם מתחת הנתון:::', allPrimesBelowNum)

  // const did = (d) => {
  //   // console.log(d, 'sdfcsedcs')
  //   if (num % d === 0) {
  //     console.log(d, 'דגכדגכדבגבךדגבחדךחבגמכהוחמגדןומדםקדמגןחבמדגםבצסצםןדלצשזםלסןקצגלבחמקדלןחבגמםדחבמםחבםחדמגםחגבמ')
  //     allPrimeFactorsOfNum.push(d)
  //     // number = number/d;
  //     // did(d)
  //   }
  //   // console.log(number, 'num')

  // }

  // for (let i = 0; i < allPrimesBelowNum.length; i++) {
  //   did(allPrimesBelowNum[i])
  // }

  // console.log('המספרים הסופים:', allPrimeFactorsOfNum)
  
}

largestPrimeFactor(12);