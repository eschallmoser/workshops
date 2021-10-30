// YOUR CODE BELOW

const oddCouple = (numArray) => {
  //    numArray [1, 2, 3, 4, 5, 7, 9]
  let oddNumArray = [];
  for (let i = 0; i < numArray.length - 1; i++) {
    if (numArray[i] % 2 != 0) {
      oddNumArray.push(numArray[i]);
    }
  }
  return oddNumArray.slice(0, 2);
};

// check each number in the array to see if it's odd
// store first odd number in new array
// store second odd number in same new array as above
// once two odd numbers are found, return a new array with those two odd numbers

// oddCouple([1, 2, 3]); // [1, 3]
