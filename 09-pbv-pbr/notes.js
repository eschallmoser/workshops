//Pass-by-value vs. Pass-by-reference

//primitive values in JS:
//-string
//-number
//-boolean
//-undefined
//-null
//-ES6 symbols

//complex values in JS"
//-objects (including arrays)
//-functions

//primitive values behave differently than complex values

//when you assign a PRIMITIVE value to a variable, the variable
//"stores" a copy of that value

// let first = 20;
// let second = first; //here, the equal operator copied the value of first
// //into second, and now second has no relationship with first anymore

// second++;

// console.log(first); //returns 20
// console.log(second); //returns 21

//when we incremented second, only the value of second changed

//------------------------

//when you assign a COMPLEX value to a variable, the variable DOES NOT
//store a copy of the value

//instead, the variable stores a reference in memory; the reference
//points to the value

//house analogy:
//the value of the house is the house itself
//the reference of the house is the address of the house

//in primitive values, the actual value is given to the assigned variable,
//and a new copy is made
//in complex values, a reference is made to the actual value, pointed to

// let first = [10, 20]; //first stores a reference to [10, 20]
// first.push(30); //first still stores the same reference to the same array

// let first = [10, 20];

// let second = [10, 20]; //second stories a NEW reference to a NEW array,
// //it is not a copy of first

// //since first and second reference different arrays, pushing a value
// //into second will not affect the array reference by first
// second.push(30);

// console.log(first); //returns [10, 20]
// console.log(second); //returns [10, 20, 30]

// let first = [10, 20];

// let second = first; //second now stores a COPY of the REFERENCE that was
// //originally stored in first

// second.push(30); //first and second share the same reference to the same,
// //so if we modify second, we also modify first, because second is a reference
// //to the same value that first references

// console.log(first); //returns [10, 20, 30]
// console.log(second); //also returns [10, 20, 30]

//-----------------------------------

//what if we did want to make a copy of a value, while working with
//complex values, and not just make another reference to the same value?

// let first = [10, 20];

// let second = first.slice(); //slice creates a new array, with a new ref!

// second.push(30); //first and second reference different arrays, so this will
// //not affect first

// console.log(first); //returns [10, 20]
// console.log(second); //returns [10, 20, 30]

//--------------------------------

//passing primitive values

// let myNum = 10;

// function adds20(num) {
//   //when myNum is passed into the function, its
//   //value gets copied into this new variable num
//   num += 20; //num is the variable that gets changed here, my Num is not
//   return num;
// }

// let returnedNum = adds20(myNum);

// //when myNum

// console.log(myNum); //still returns 10
// console.log(returnedNum); //returns 30, because of myNum getting passed
// //into the function

//------------------------------

//passing complex values

// let myArray = [10];

// function pushes20(array) {
//   array.push(20);
//   return array;
// }

// let returnedArray = pushes20(myArray); //what you're passing here is the
// //reference to the value, and so both returnedArray and myArray are going
// //to be modified here, because they are two references to the same
// //one value

// console.log(myArray); //returns [10,20]
// console.log(returnedArray); //returns [10, 20]
//the variable names are different, but they are both references
//to the same value

//-----------------------------------------

//Equality operator and PBV/PBR

//=== will compare complex values by reference, not by value!

// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];

// console.log(array1 === array2); //returns false, because while the values
//are the same, the references are not, they are two different references!

// let array1 = [1, 2, 3];
// let array2 = array1; //array1 and array2 now share the same reference

// console.log(array1 === array2); //returns true because array1 and
//array2 are the same reference
