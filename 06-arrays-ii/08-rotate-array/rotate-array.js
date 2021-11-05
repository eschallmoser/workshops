// YOUR CODE BELOW

// what I came up with:

// const rotateArray = (originalArray, rotateNum = 0) => {
//   let newArray = [];

//   if (rotateNum) {
//     let lastEl = originalArray.pop(rotateNum);
//     originalArray.unshift(lastEl);
//     return originalArray;
//   }

//   if (rotateNum < 0) {
//     let firstEl = originalArray.shift(rotateNum);
//     originalArray.push(firstEl);
//     return originalArray;
//   }

//   for (let i = 0; i < originalArray.length; i++) {
//     newArray.push(originalArray[i]);
//   }

//   return newArray;
// };

// FullStack's solution:

function rotateArray(originalArray, rotateNum) {
  let front = originalArray.slice(-rotateNum);
  let end = originalArray.slice(0, -rotateNum);

  return front.concat(end);
}
