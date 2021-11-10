// YOUR CODE BELOW

const finderFunction = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    let result = callback(array[i]);
    if (result) {
      return i;
    }
  }
  return -1;
};
