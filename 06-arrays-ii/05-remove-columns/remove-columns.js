// YOUR CODE BELOW

const removeColumns = (originalGrid, numColumns) => {
  const newArr = originalGrid;

  for (let i = 0; i < newArr.length; i++) {
    newArr[i].splice(-numColumns);
  }

  return newArr;
};

// let sentence = ["each", "element", "is", "a", "word"];
// let sentence2 = ["these", "are", "a", "bunch", "of", "elements"];
// sentence.splice(-2, 1);
// sentence2.splice(-2, 1);
// console.log(sentence);
// console.log(sentence2);
// originalGrid:
// //[
//    [1, 2, 3, 4, 5],
// // [1, 2, 3, 4, 5],
// // [1, 2, 3, 4, 5]
// ]

//   removeColumns([[1, 2, 3],
//                  [1, 2, 3],
//                  [1, 2, 3],
//                  [1, 2, 3]], 2);

// it removes numColumns amount of columns, starting from end of columns, and returns whatever
//                                      column hasn't been removed OR another way of thinking about it if there are four columns
//and we want two removed, then two would be returned, the function doesn't return the removed
// columns, it returns the columns that haven't been removed, it returns the original array
// with the correct amount of columns removed
//                                      /* =>   [[1],= [0, 0]
//                                              [1], = [1, 0]
//                                              [1], = [2, 0]
//                                              [1]] = [3, 0]
