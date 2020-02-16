function sumSquareDifference(n) {

  let allNumbers = []

  for (let i = 1; i <= n; i++) {
    allNumbers.push(i)
  }

  const sum = allNumbers.reduce((last, corent) => {
    return last + corent
  })

  const squareSum = sum * sum

  console.log(allNumbers)
  console.log(squareSum)


  const sum of the squares = allNumbers.reduce((last, corent) => {
    return last + corent * corent
  })

  return squareSum - sum1


  }
  
  sumSquareDifference(100);
  