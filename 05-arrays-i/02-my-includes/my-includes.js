// YOUR CODE BELOW

const myIncludes = (anArr, searchValue) => {
  let isFound = false;
  for (let i = 0; i < anArr.length; i++) {
    if (anArr[i] === searchValue) {
      isFound = true;
    }
  }
  return isFound;
};
