// YOUR CODE BELOW
//
const mySlice = (
  originalArray,
  startIdx = 0,
  endIdx = originalArray.length
) => {
  let slicedArr = [];

  if (startIdx < 0) {
    startIdx = originalArray.length + startIdx;
  }

  if (endIdx < 0) {
    endIdx = originalArray.length + endIdx;
  }

  for (let i = startIdx; i < endIdx; i++) {
    slicedArr.push(originalArray[i]);
  }
  return slicedArr;
};
