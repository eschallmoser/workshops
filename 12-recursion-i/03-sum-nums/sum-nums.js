// YOUR CODE BELOW

const sumNums = (num) => {
  if (num === 1) {
    return num;
  }
  return num + sumNums(num - 1);
};
