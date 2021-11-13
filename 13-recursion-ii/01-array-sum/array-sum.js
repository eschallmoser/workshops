// YOUR CODE BELOW

const arraySum = (arrOfNums) => {
  let sum = 0;
  for (let i = 0; i < arrOfNums.length; i++) {
    let element = arrOfNums[i];
    if (Array.isArray(element)) {
      sum = sum + arraySum(element);
    } else {
      sum = sum + element;
    }
  }
  return sum;
};
