// YOUR CODE BELOW

const zooInventory = (aZoo) => {
  const animalFacts = [];
  for (let i = 0; i < aZoo.length; i++) {
    const [animalName, [animalSpecies, animalAge]] = aZoo[i]; //destructuring
    animalFacts.push(`${animalName} the ${animalSpecies} is ${animalAge}.`);
  }
  return animalFacts;
};

// const zooInventory = (multiDArr) => {
//   let flatArray = [];

//   for (let i = 0; i < multiDArr.length; i++) {
//     let zooString = "";
//     let outerEl = multiDArr[i];
//     for (let j = 0; j < outerEl.length; j++) {
//       let innerEl = outerEl[j];
//       if (!Array.isArray(innerEl)) {
//         zooString += innerEl;
//       } else {
//         zooString += ` the ${innerEl[0]} is ${innerEl[1]}.`;
//       }
//     }
//     flatArray.push(zooString);
//   }
//   return flatArray;
// };

// take each array of animal facts and turn into a string inside of a new array (for loop)
// add "the" and "is" strings at specific points in the string (.join method OR .splice method)
// return all the arrays with strings as one new flat array (.concat method)
