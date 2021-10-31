// YOUR CODE BELOW
//[1, 2, 3, 4, 5, 6]
const evenAndOdd = (anArr) => {
  const evenArr = [];
  const oddArr = [];

  for (let i = 0; i < anArr.length; i++) {
    if (anArr[i] % 2 != 0) {
      oddArr.push(anArr[i]);
    } else {
      evenArr.push(anArr[i]);
    }
  }
  return [evenArr, oddArr];
};
