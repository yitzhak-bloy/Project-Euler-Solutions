function longestCollatzSequence(limit) {

  let array = []

  for (let i = 0; i < limit; i++) {
    array.push(i)
    
  }


  const check = (num) => {
    let arr = [num, ]
    let z = num;
    while (z > 1) {
    //  console.log(z);

      if (z % 2 === 0) {
        z = z/2
        arr.push(z)
      } else {
        z = z*3+1
        arr.push(z)
      }
     z--;
     console.log(arr.length)
     return arr
    }
    

  }
  for (let x = 0; x < array.length; x++) {
    
    if (check(x)) {
      // console.log(x)
    }
    
  }


    // Good luck!
    // return true;
  }
  
  longestCollatzSequence(14);
  