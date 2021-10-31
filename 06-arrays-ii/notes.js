// Arrays, part two!!

// MORE METHODS

// .splice method
// used to add or remove elements from the middle of an array
// destructive--mutates the original array to create a new array
// its first argument is an index
// its second argument is a count of elements to delete from the element
//      starting at the provided index
// it returns a brand new array with all the removed elements from
//      the original array

// example:
// let names = ["George", "John", "Thomas"];
// let singleTermPresidents = names.splice(1, 1);
// console.log(names); //returns original array with John removed
// console.log(singleTermPresidents); //returns new array with John as element

// let beatles = ["Paul", "George", "John", "Ringo"];
// let deadBeatles = beatles.splice(1, 3);
// console.log(beatles); //return original array with only Paul as element
// console.log(deadBeatles); //return new array with George, John, and Ringo as elements

// --you can also use .splice to input new element to replace the one being removed

// let newGroup = beatles.splice(1, 2, "Pete");
// console.log(newGroup); //returns new array with George and John
// console.log(beatles); //returns original array with Paul, Pete, Ringo

// --you can also use .splice to just input new elements in the array, without removing anything

// let newGroup = beatles.splice(1, 0, "Pete", "Betty");
// console.log(newGroup); //returns nothing, because nothing was removed from original array to put in it
// console.log(beatles); //returns array with Paul Pete Betty George John Ringo as elements

//------------------------------------------------------------

// .join method
// lets you specify a string with which to join all the elements in an array

// let beatles = ["Paul", "George", "John", "Ringo"];
//                             this customizes the join character
// let sentence = "The Beatles were " + beatles.join(", ");
// returns string of The Beatles were Paul, George, John, Ringo

// console.log(sentence);

//------------------------------------------------------

// .concat method--joins two arrays into one new array

// let older = ["Ringo", "Paul"];
// let younger = ["Paul", "George"];

// console.log(older.concat(younger));

// -----------------------------------------

// Nested Arrays--arrays can have arrays as elements within the array!!!
// -aka multi-dimensional arrays
// let relatedThings = [
//   ["Windows", "MacOS"],
//   ["New York", "Chicago"],
// ];
// // the two elements of this array are two arrays
// console.log(relatedThings.length); //returns 2, even though there are 4 things listed, there are really only two elements

// // so how do we access things in this array????

// // bracket access!!! to access New York:
// //the second element in the array, then the first element in the within array
// console.log(relatedThings[1][0]);

// there is NO END to how many nested arrays could exist

// another example:
// let rsvpGroups = [["Jane", "Mel"], "Jack", ["Rohan", "David", "Meg"]];
// // 2-dimensional array: has arrays and a string as elements

// for (let i = 0; i < rsvpGroups.length; i++) {
//   let element = rsvpGroups[i];

//   if (Array.isArray(element)) {
//     for (let j = 0; j < element.length; j++) {
//       console.log(element[j]);
//     }
//   } else {
//     console.log(element);
//   }
// }

// another example: (to represent grids)

// let grid = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// to extract the entire second row:
// console.log(grid[1]); //returns [4, 5, 6]

// to get the second column:
// --you could hardcode it like this, but really don't do that:

// let hardCode2ndCol = [grid[0][1], grid[1][1], grid[2][1]];

// console.log(hardCode2ndCol);

// OR--you could write a for loop

// let secondCol = [];
// for (let i = 0; i < grid.length; i++) {
//   // for each loop of the for loop, we want it to extract the
//   // second element of the current row, then add it to secondCol array
//   //   i is the current row, 1 is the index of the current row, so it's the second element of each array
//   secondCol.push(grid[i][1]);
//   // this is much better than hard coding, because even if elements get
//   // added to the array, the right thing can still get added to secondCol as well, because of the for loop doing what it does
// }

// console.log(secondCol);
