const primeSummation = (n) => {
  let numbers = [2];

  for (let i = 3; i < n; i++) {
    numbers.push(i)
  }

  
  console.log(numbers)
  for (let x = 0; x < Math.sqrt(numbers.length); x++) {
    // console.log('numbers[x]', numbers[x])
    console.log(numbers[x])
    numbers.forEach((value, key) => {
    //  console.log(`value: ${value}, key: ${key},'numbers[x]', ${numbers[x]} `);
      if (value % numbers[x] !== 0 || numbers[x] === value) {
        // console.log('a','numbers[x]',numbers[x],'number', number, number % numbers[x] )
      } else {
        // console.log('b','numbers[x]',numbers[x],'number', number, number % numbers[x] )
        numbers.splice(key, 1)
      }
    });

  }
  
  return numbers.reduce((lastResult, currentValue) => {
    return lastResult + currentValue;
  })

}
  
primeSummation(2000000);

Math.sqrt(2000000);

























































const primeSummation = (n) => {
  let number = Math.sqrt(n);
  let num = [2];
  let check = false;

  for (let i = 2; i < number; i++) {
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
