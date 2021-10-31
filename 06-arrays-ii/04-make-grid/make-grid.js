// YOUR CODE BELOW
//                  3  columns    4 rows
// //should return [[1, 2, 3],
//                  [1, 2, 3],
//                  [1, 2, 3],
//                  [1, 2, 3]];

const makeGrid = (numColumns, numRows) => {
  let rowArray = [];
  let finalArray = [];

  for (let i = 1; i <= numColumns; i++) {
    rowArray.push(i);
  }
  // rowArray = [1, 2, 3]

  for (let i = 1; i <= numRows; i++) {
    finalArray.push(rowArray);
  }

  return finalArray;
};

// build a function that takes in a parameter of a number that returns an array
// with incrementing numbers up to that num
// ex: makeArr(3) -> [1, 2, 3]
// ex: makeArr(5) -> [1, 2, 3, 4, 5]

// const makeArr = (aNum) => {
//   let firstArray = [];
//   for (let i = 1; i <= aNum; i++) {
//     myArray.push(i);
//   }
//   return firstArray;
// };

// console.log(makeArr(5));
