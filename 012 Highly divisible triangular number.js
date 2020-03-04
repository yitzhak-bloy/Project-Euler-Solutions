function divisibleTriangleNumber(n) {
  let arrayOfdivisibles = [];
  let numberOfDivisibles = ''

  const check = (number) => {
    arrayOfdivisibles = [];
    numberOfDivisibles = '';
    for (let i = 1; i < Math.sqrt(number); i++) {
      if (number % i === 0) {
        arrayOfdivisibles.push(i)
      }
    } 
      
    if (Number.isInteger(Math.sqrt(number))) {
      numberOfDivisibles = arrayOfdivisibles.length * 2 + 1 
    } else {  
      numberOfDivisibles = arrayOfdivisibles.length * 2
    }
    return numberOfDivisibles > n ? true : false
  }

  for (let x = 1; x <  x+1; x++) {
    if (check(x*(x+1)/2)) {
      return x*(x+1)/2
    }

  }
}

divisibleTriangleNumber(500);  