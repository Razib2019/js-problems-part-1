/**
//  Inch to feet
// 12 inch = 1 feet

function inchToFeet(inch) {
  const feet = inch / 12;
  return feet;
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);
 */

/**
//  Inch to Feet and Inch
function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch";
  return result;
}

const shuvoHeight = inchToFeet(75);
console.log(shuvoHeight);
 */

/**
//  Miles to Kilometers
function milesToKilometers(miles) {
  const kms = miles * 1.60934;
  return kms;
}

const pathDistance = milesToKilometers(10);
console.log(pathDistance);
 */

/**
//  Kilometers to Miles

 */
function KilometersToMiles(kms) {
  const miles = kms * 0.621371192;
  return miles;
}

const pathDistance = KilometersToMiles(10);
console.log(pathDistance);
