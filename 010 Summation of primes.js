const primeSummation = (n) => {
  let numbers = [];

  for (let i = 2; i < n; i++) {
    numbers.push(i)
  }

  // console.log(numbers)

  for (let x = 0; x < numbers.length; x++) {
    // console.log('numbers[x]', numbers[x])

    numbers.forEach((value, key) => {
    //  console.log(`value: ${value}, key: ${key},'numbers[x]', ${numbers[x]} `);
      if (value % numbers[x] !== 0 || numbers[x] === value) {
        // console.log('a','numbers[x]',numbers[x],'number', number, number % numbers[x] )
      } else {
        // console.log('b','numbers[x]',numbers[x],'number', number, number % numbers[x] )
        numbers.splice(key, 1)
      }
    });


    // c = numbers.filter((number) => {
    //   if (number % numbers[x] !== 0 || numbers[x] === number) {
    //     console.log('a','numbers[x]',numbers[x],'number', number, number % numbers[x] )
    //     return true
    //   } else {
    //     console.log('b','numbers[x]',numbers[x],'number', number, number % numbers[x] )
    //     return false
    //   }
    // })
    
  }
  
  return numbers.reduce((lastResult, currentValue) => {
    return lastResult + currentValue;
  })

  // console.log('c',numbers)
  // return numbers

}
  
primeSummation(2000000);




























































const primeSummation = (n) => {
  let num = [2];
  let check = false;

  for (let i = 2; i < n; i++) {
    check = true

    for (let x = 0; x < num.length; x++) {
      // console.log('i', i, 'x', num[x])
      if (i % num[x] === 0) {
        check = false;
      }
    }

    if (check) {
      num.push(i)
    }
  }
  
  // console.log(num)
  return num.reduce((lastResult, currentValue) => {
    return lastResult + currentValue;
  })
}
  
primeSummation(140759);
