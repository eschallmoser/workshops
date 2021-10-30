// YOUR CODE BELOW
//                     [1, 2, 2, 3] 2
const myLastIndexOf = (anArr, searchValue, startIdx) => {
  let foundIndex = -1;
  let endingIndex = startIdx || anArr.length - 1;
  for (let i = endingIndex; i > -1; i--) {
    if (anArr[i] === searchValue) {
      foundIndex = i;
      break;
    }
  }
  return foundIndex;
};

console.log(myLastIndexOf([1, 2, 2, 3], 2));

// check if searchValue exists in an array
// return the last index at when the searchValue appears
// return -1 if searchValue does not exist in array
// if startIdx is defined, should start looking for the searchValue at that index,
// and then move backwards, towards the front of the array, as it looks for value
