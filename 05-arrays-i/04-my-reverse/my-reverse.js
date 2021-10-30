// YOUR CODE BELOW
// [1, 2, 3]
// [3]
// [2, 3]
// [1, 2, 3]
// [3, 2, 1]
const myReverse = (anArr) => {
  let reversedArr = [];
  for (let i = 0; i < anArr.length; i++) {
    reversedArr.unshift(anArr[i]);
  }
  return reversedArr;
};
