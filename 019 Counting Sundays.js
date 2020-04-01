/*  
You are given the following information, but you may prefer to do some research for yourself.

 * 1 Jan 1900 was a Monday.
 * Thirty days has September, April, June and November.
   All the rest have thirty-one, Saving February alone, Which has twenty-eight, rain or shine. 
   And on leap years, twenty-nine.
 * A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

const countingSundays = (firstYear, lastYear) => {
  let numOfFirstMonthInSundays = 0;
  let numbOfDay = 1;

  // Checker with the day given into the function is divided into seven and if so it is Sunday.
  const check = (firstMonth) => {
    if (firstMonth % 7 === 0) {
      numOfFirstMonthInSundays++;
    }
  }

  // Puts the first day of a month into a check function (in normal year).
  const normalYear = (num) => {
    check(num);
    check(num+31);
    check(num+31+28);
    check(num+31+28+31);
    check(num+31+28+31+30);
    check(num+31+28+31+30+31);
    check(num+31+28+31+30+31+30);
    check(num+31+28+31+30+31+30+31);
    check(num+31+28+31+30+31+30+31+31);
    check(num+31+28+31+30+31+30+31+31+30);
    check(num+31+28+31+30+31+30+31+31+30+31);
    check(num+31+28+31+30+31+30+31+31+30+31+30);
    numbOfDay = num+31+28+31+30+31+30+31+31+30+31+30+31;
  };

  // Puts the first day of a month into a check function (in Leap year).
  const LeapYear = (num) => {
    check(num);
    check(num+31);
    check(num+31+29);
    check(num+31+28+31);
    check(num+31+28+31+30);
    check(num+31+28+31+30+31);
    check(num+31+28+31+30+31+30);
    check(num+31+28+31+30+31+30+31);
    check(num+31+28+31+30+31+30+31+31);
    check(num+31+28+31+30+31+30+31+31+30);
    check(num+31+28+31+30+31+30+31+31+30+31);
    check(num+31+28+31+30+31+30+31+31+30+31+30);
    numbOfDay = num+31+28+31+30+31+30+31+31+30+31+30+31;
  }

  // Moves on all the years, and puts each year into its proper function, depending on whether it is a leap year or not.
  for (let i = firstYear; i <= lastYear; i++) {
    if (i % 4 !== 0 || i === 1900) {
      normalYear(numbOfDay)
    } else {
      LeapYear(numbOfDay)
    }
  };

  return numOfFirstMonthInSundays;
}

countingSundays(1901, 2000);