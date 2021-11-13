// YOUR CODE BELOW

const reverseArray = (array) => {
  //[1, 2, 3, 4]
  // [4] and [1, 2, 3]
  //[4] + [3] + [1, 2]
  //[4] + [3] + [2] + [1]
  //our base case is here - the array on the
  //far right side is down to 1 length
  if (array.length === 1) {
    return array;
  }

  const lastElement = array[array.length - 1];

  return [lastElement].concat(reverseArray(array.slice(0, -1)));
};
