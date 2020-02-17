function nthPrime(n) {
  let num = [2];

  const check1 = (number) => {
    for (let x = 0; x < num.length; x++) {
      if (number % num[x] === 0) {
        return false
      } 
    }
    return true
  }

  for (let i = 3; i < 100000000; i++) {
    if (check1(i)) {
      num.push(i)
    }
    if (num.length === n) {
      return num[num.length - 1]
    }
  }
}
  
nthPrime(10001);  





















function nthPrime(n) {
  let num = [2];
  let check = true;

  for (let i = 3; i < 1000000; i++) {
    check = true;
    for (let x = 0; x < num.length; x++) {
      if (i % num[x] === 0) {
        check = false
      } 
    }
    if (check) {
      num.push(i)
    }
    if (num.length === n) {
      return num[num.length - 1]
    }
  }
}
  
nthPrime(10001);  