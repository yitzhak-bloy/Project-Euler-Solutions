const xxxxx = (num) => {

  let numbers = [];

  for (i = 0; i < num; i ++) {
    if (Number.isInteger(i/3) || Number.isInteger(i/5)) {
      numbers.push(i)
    }
  }
  console.log(numbers);

  const sumOfNumbers = numbers.reduce((sum, number) => sum + number);


return sumOfNumbers

} 