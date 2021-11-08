// YOUR CODE BELOW

const veryOddMutant = (numArr) => {
  let mutantCount = 0;

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 0) {
      numArr[i] = "normie";
      mutantCount += 1;
    }
  }
  return mutantCount;
};
