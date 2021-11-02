// define a function myRacecar, that accepts one argument, a string
// should return true if word is spelled backwards the same as it forwards
// example: myRacecar("racecar") --> true
// "banana";
const myRacecar = (aStr) => {
  reverseString = "";

  for (let i = aStr.length - 1; i >= 0; i--) {
    reverseString += aStr[i];
  }
  return reverseString.toUpperCase() === aStr.toUpperCase();
};

console.log(myRacecar("RaCeCaR"));
