function largeSum(arr) {




  const sumOfNumbers = arr.reduce((sum, number) => sum + number);









    return sumOfNumbers;
  }
  
  // Only change code above this line
  
  const testNums = [
    '37107287533902102798797998220837590246510135740250',
    '46376937677490009712648124896970078050417018260538'
  ];
  
  largeSum(testNums);
  