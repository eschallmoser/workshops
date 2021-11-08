// YOUR CODE BELOW

//what we worked on:
// const mySplice = (anArr, startIdx, deleteCount, value) => {
//   let newArr = [];
//   let removedElemArr = [];
//   let indexesRemoved = [...Array(deleteCount).keys()].map((val) => ++val); // [1]

//   for (let i = 0; i < anArr.length; i++) {
//     const currentElem = anArr[i];
//     if (i === startIdx) {
//       if (value) {
//           newArr.push(value)
//         newArr[i] = value;
//         console.log(newArr);
//       }
//     //   if (deleteCount) {
//     //     for (let j = 0; j < indexesRemoved.length; j++) {
//     //       removedElemArr.push(anArr[indexesRemoved[j]]);
//     //     }
//     //     i += deleteCount - 1;
//     //   }
//     } else {
//       newArr.push(currentElem);
//     }
//   }

//   anArr.length = 0;
//   let index = newArr.length;
//   while (index--) {
//     anArr[index] = newArr[index];
//   }

//   return removedElemArr;
// };

// let ourStuff = ["food", "trash", "clothes"];
// mySplice(ourStuff, 1, 0, "more food");

//------------------------------------------------------

//Eliot's solution:

const mySplice = (anArr, startIdx, deleteCount, ...args) => {
  //to handle multiple arguments
  //Store the beginning of the array
  const startElements = [];
  //Store the deleted elements
  const deletedElements = [];

  //Take everything from before the startIdx and store it in the
  //startElements array
  for (let i = 0; i < startIdx; i++) {
    startElements.push(anArr.shift());
  }

  //Then delete everything by removing an element per deleteCount
  //from the new start of the original array
  for (let i = 0; i < deleteCount; i++) {
    deletedElements.push(anArr.shift());
  }

  //Insert the added elements into the array
  for (let i = args.length - 1; i >= 0; i--) {
    const currentArg = args[i];

    anArr.unshift(currentArg);
  }

  //reattach the beginning elements onto the array
  for (let i = startElements.length - 1; i >= 0; i--) {
    const currentStartElement = startElements[i];

    anArr.unshift(currentStartElement);
  }

  //return the deleted elements
  return deletedElements;
};
