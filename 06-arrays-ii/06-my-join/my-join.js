// YOUR CODE BELOW

const myJoin = (array, separator = ",") => {
  let newString = "";

  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      newString += array[i];
    } else if (array[i]) {
      newString += `${array[i]}${separator}`;
    } else {
      newString += separator;
    }
  }
  return newString;
};
