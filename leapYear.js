/**
//  Simple Logic
// Year will be a leap year if the year is divisible by 4

function isLeapYear(year) {
  if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear = isLeapYear(2043);
console.log(leapYear);
 */

/**
1. Those year that is not divisible by 100 and if the year is divisible by 4 then it will be a leap year
2. If the year is divisible by 400, then it is a leap year 
3. Else it is not a leap year
 */

function isLeapYear(year) {
  if (year % 100 !== 0 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

const leapYear = isLeapYear(2100);
const leapYear2 = isLeapYear(2400);
const leapYear3 = isLeapYear(1900);
const leapYear4 = isLeapYear(2052);
console.log(leapYear, leapYear2, leapYear3, leapYear4);
