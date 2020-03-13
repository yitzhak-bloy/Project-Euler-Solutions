function longestCollatzSequence(limit) {
  let array = [];
  let object = {};

  for (let i = limit; i > 0; i--) {
    array.push(i)
  }

  const check = (num) => {
    let arr = []
    let z = num;

    while (z > 1) {
      if (z % 2 === 0) {
        arr.push(z)
        if (array.indexOf(z) > -1) {
          delete array[array.indexOf(z)];
        }
        z = z/2
      } else {
          if (array.indexOf(z) > -1) {
            delete array[array.indexOf(z)];
          }
          arr.push(z)
          z = z*3+1
        }
    }
    arr.push(1)
    object[num] = arr.length
  }

  array.map((num) => {
    if (num) {
      check(num)
    }
  });

  return Number(Object.keys(object).reduce((a, b) => object[a] > object[b] ? a : b));
} 

longestCollatzSequence(5847);