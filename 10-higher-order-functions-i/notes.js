//functions are special! Functions are not special!
//functions are first-class objects, which means they're just like any other
//value in JS

//-----------------------

//we know we can push strings, or any values into arrays

// let amazingArray = [];

// let happyString = "happy";

// amazingArray.push(happyString);
// amazingArray.push(happyString);
// amazingArray.push(happyString);

// console.log(amazingArray); //returns ['happy', 'happy', 'happy']

//functions aren't special! we can push them into an array, too!!

// let amazingArray = [];

// const happyFunction = () => {
//   console.log("I am happy!");
// };

// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);
// amazingArray.push(happyFunction);

// console.log(amazingArray); //returns [
//     [Function: happyFunction],
//     [Function: happyFunction],
//     [Function: happyFunction]
//   ]

//-------------------------------------

//how do we call all the functions in the array? the same way we have
//always been looping through the elements of an array

// function happyFunction() {
//   console.log("I am happy!");
// }

// let amazingArray = [happyFunction, happyFunction, happyFunction];

// for (let i = 0; i < amazingArray.length; i++) {
//   let element = amazingArray[i]; //each element is a function!
//   element(); //invoking the function!
// }
//returns:
// I am happy!
// I am happy!
// I am happy!

//-----------------------------------------------------

//Passing values into functions
//we know we can pass strings, or any value, into a function
//we can also pass functions into other functions, too

//functions that take a function or return a functions are called
//'higher-order functions'

// function firstFunction(anotherFunction) {
//   console.log(anotherFunction);
// }

// function happyFunction() {
//   console.log("I am happy!");
// }

// firstFunction(happyFunction); //returns [Function: happyFunction]
//basically coerces the function into a string, and doesn't do
//anything else, because the function hasn't actually been invoked, just
//passing in the function is not enough to do anything,

//invoking = ()

//if we want happyFunction to run, while being passed in as an argument for
//another function, we have to call it!

// function firstFunction(anotherFunction) {
//   anotherFunction(); //invoking it this time
// }

// function happyFunction() {
//   console.log("I am happy!");
// }

// firstFunction(happyFunction); //returns I am happy! because happyFunction
//has been invoked!

//-----------------------------------------------------

// function saysHi(name) {
//   //helper function, function is getting defined, but not getting expressed yet
//   console.log("Hi", name);
// }

// function saysBye(name) {
//   //helper function
//   console.log("Bye", name);
// }

// function callsWithName(name, saysHiOrBye) {
//   //wrapper function, saysHiOrBye
//   //is variable for whatever actual function is passed in as an argument
//   saysHiOrBye(name); //invoking the function, whatever is passed in, with
//   //whatever name is passed in
// }

// callsWithName("Sadie", saysHi); //will run the saysHi function,
// //returns Hi Sadie
// callsWithName("Sadie", saysBye); //will run the saysBye function,
//returns Bye Sadie

//----------------------------------------------------

// function addWorld(string) { //function is defined--function takes a string
//     //and returns it with world added to it
//   return string + " world";
// }

// function callsWithHello(func) { //function is defined--takes in a function,
//     //and calls that function while passing in hello
//   return func("hello"); //returns whatever the function being passed in returns
// }

// let result = callsWithHello(addWorld);
// //first we jump to the callsWithHello function, and addWorld gets
// //passed in as the function
// //inside of callsWithHello, we call addWorld, with hello passed in
// //as string variable
// //then we jump to addWorld function, "hello" is passed in as the
// //string variable
// console.log(result);
//finally, we return hello world

//-----------------------------------------------------------

// function sayToAll(names, sayWithNameFunc) {
//   //takes an array of names,
//   //and a function that will say something with names, as arguments
//   for (let i = 0; i < names.length; i++) {
//     sayWithNameFunc(names[i]);
//   }
// }

// let group = ["Jane", "Jill", "Pip", "Mike"];

// function sayHelloWithName(name) {
//   //defining a function that will
//   //say hello with a string passed in as name variable
//   //this function can get passed in as an argument into the
//   //sayToAll function
//   console.log(`Hello ${name}!`);
// }

// sayToAll(group, sayHelloWithName); //passing in the group variable for
//names, and passing in the functionality with sayHelloWithName
//returns:
// Hello Jane!
// Hello Jill!
// Hello Pip!
// Hello Mike!

//-----------------------------------------------------------

//we can pass anonymous functions into another function, too

//an anonymous function is some functionality that can be packaged
//into a function but not necessarily have a name, because the name
//might not be needed

// function sayToAll(names, sayWithNameFunc) {
//   for (let i = 0; i < names.length; i++) {
//     sayWithNameFunc(names[i]);
//   }
// }

// let group = ["Jane", "Jill", "Pip", "Mike"];

// sayToAll(group, function (name) {
//   console.log(`Hello, ${name}!`);
// });

//here, we don't define a function separately and then invoke, but
//instead we pass the function in directly as one of the parameters,
//without giving it a name

//1. we call sayToAll
//2. we pass in group as first parameter
//3. the second parameter is the function, the rest of line 185 and
//all of line 186, passed in directly--the function does NOT have a
//name itself, it's a group of instructions without an assigned name,
//making it an anonmyous function

//the sayToAll function is the function that contains instructions
//about the for loop, and the anonymous function is the function
//that contains instructions for what to say with the names that
//are being looped through

//------------------------------------------------------------------

// const plus = function (num1, num2) {
//   return num1 + num2;
// };

// const minus = function (num1, num2) {
//   return num1 - num2;
// };

// const calc = function (num1, operationFunc, num2) {
//   return operationFunc(num1, num2);
// };

// console.log(calc(3, minus, 2)); //returns 1
// console.log(calc(154, plus, 200)); //returns 354

//the calc function takes two nums and a function as arguments, and so
//when it's called it runs the function that was passed in,
//with consideration to the two nums that were passed in, and gives
//that result

//--------------------------------------------------------------

//.forEach--a native method built into JS
//a function passed into another function is often called a callback

//some built-in JS features use callbacks

//.forEach is an array method
//it accepts a callback as its only argument
//.forEach calls the callback for each element in the array
//when .forEach calls the callback, it passes the current element
//as the first argument of the callback

//here is the array
// let bridges = ["Brooklyn", "Golden Gate", "London"];

// //here is the function, in this case it's a function that converts a
// //given string into uppercase
// function logUpperCase(string) {
//   console.log(string.toUpperCase());
// }

// //here's what we would do if we wanted to convert each element in the
// //bridges array into uppercase (each element is a string)
// bridges.forEach(logUpperCase);
//we specify the variable, we add a method with dot notation, then
//we call the function, and it returns:
// BROOKLYN
// GOLDEN GATE
// LONDON

//the callback passed into forEach ALSO takes an optional second argument
//.forEach passes the current index of the element as the second argument,
//if you wanted to do something with indexes

// let bridges = ["Brooklyn", "Golden Gate", "London"];

// function logWithIdx(string, idx) {
//   console.log(string, "is at index", idx);
// }

// bridges.forEach(logWithIdx);
//returns:
// Brooklyn is at index 0
// Golden Gate is at index 1
// London is at index 2
