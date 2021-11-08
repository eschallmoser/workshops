// YOUR CODE BELOW

const veryOdd = (numArr) => {
  const oddArr = [];

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 2 === 1) oddArr.push(numArr[i]);
  }
  return oddArr;
};
