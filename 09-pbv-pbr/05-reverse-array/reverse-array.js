// YOUR CODE BELOW

// const reverseArray = (arr) => {
//   //[1, 2, 3, 4]

//   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
//     [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
//   }

//   return arr;
// };

//Eliot's solution:

const reverseArray = (anArr) => {
  //take the thing on one side and switch it with the thing on the other.
  //so we can think about this problem as a distance from the middle
  //where we start at the furthest distance on each side, and move
  //inwards to the middle

  for (let i = 0; i < Math.floor(anArr.length / 2); i++) {
    const rightPos = anArr.length - 1 - i;

    const leftElem = anArr[i];
    const rightElem = anArr[rightPos];

    anArr[i] = rightElem;
    anArr[rightPos] = leftElem;
  }

  return anArr;
};
