// YOUR CODE BELOW

const sumDigits = (aNum) => {
  //Turn number into a string,
  //so we can deal with individual digits
  const stringNum = aNum.toString();

  //if this is the last digit, just return it
  if (stringNum.length === 1) {
    return parseInt(stringNum);
  }

  //figure out what the rest of the number is
  //after removing the first digit
  const restOfString = stringNum.slice(1);

  const nextNumber = parseInt(restOfString);

  //add the first digit to the result of this
  //function called on the rest of the digits
  return parseInt(stringNum[0]) + sumDigits(nextNumber);
};
