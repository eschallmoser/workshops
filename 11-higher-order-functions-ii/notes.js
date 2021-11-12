//Returning values from functions

//we know that functions can return values

//in the previous unit, we learned that functions are like any
//other values in JS
//so if functions can return values...
//and functions are values...
//that means functions can return other functions!

// function greetMe() {
//   console.log("Hi!");
// }

// function getGreeter() {
//   return greetMe; //returning it, but not calling it yet
// }

// let greeter = getGreeter();
// //getGreeter is called
// //greetMe would be returned
// //greeter would hold the value of greetMe

// console.log(typeof greeter); //returns function
// console.log(greeter); //returns [Function: greetMe]
// greeter(); //returns Hi!

//------------------------------------

//we can declare a new inner function and then return it:

// function getGreeter() {
//   function greetMe() {
//     console.log("Hi!");
//   }

//   return greetMe; //isn't getting called here, just returned
// }

// let greeter = getGreeter();

// greeter(); //returns Hi!

//above, we are defining a function inside of another function, and
//everytime the function is called, it's like a new function will
//be created

//---------------------------------------------

//we can return anonymous functions, too
//functions don't always need to have names

// function getGreeter() {
//   return function () {
//     console.log("Hi!");
//   };
// }

// let greeter = getGreeter();
// greeter(); //still returns Hi!

//------------------------------------------------------

//what if our returned function takes a paramater?
//it would still work, of course!

// function getGreeter() {
//   return function (name) {
//     console.log("Hi", name);
//   };
// }

// let greeter = getGreeter();

// greeter("Marie"); //returns Hi Marie
// greeter("Rosalind"); //returns Hi Rosalind
// greeter(); //returns Hi undefined

//-------------------------------------------------------

//scope refresher:

//inner functions can access variables defined in outer functions
//a function inside of a function can access the variables in that
//outer function
//inner can go out, but outer can't go in

// function greeter() {
//   let name = "Marie";
//   let saysHi = function () {
//     console.log("Hi", name);
//   };
//   saysHi();
// }

// greeter(); //returns Hi Marie, because the variable name is still
//accessible to the inner function

//----------------------------------------------------------

//closure is the fact that an inner function can STILL access the
//values defined in the outer function even after the outer function
//is finished running!

//examples:

// function getGreeter() {
//   console.log("getGreeter is running");

//   let name = "Marie";

//   console.log("getGreeter is finishing");

//   return function () { //this is the closure
//     console.log("Hi", name);
//   };
// }

// let greeter = getGreeter;
// //closure--if a variable is defined within a function and that
// //function is returned and remains alive in some way, than the
// //value of name is still alive
// //JS closes over the value of name and still keeps it available,
// //even though the function it's originating from has already
// //been executed

// greeter();

//----------------------------

//what if getGreeter takes a parameter? would closure still work?
//yes

// function getGreeter(name) {
//   return function () {
//     console.log("Hi", name);
//   };
// }

// let greeter = getGreeter("Rosalind");
// greeter(); //returns Hi Rosalind

//-------------------------------------------------

//what if both functions take parameters?
//the closure still stands

// function getGreeter(name1) {
//   return function (name2) {
//     console.log("Hi " + name1 + " , meet " + name2);
//   };
// }

// let greeter = getGreeter("Marie"); //this, along with line 150,
// //is locking in the value for the name1 variable
// greeter("Rosalind"); //this will provide value for name2 variable
//returns Hi Marie , meet Rosalind

//we can continue calling greeter with different arguments, but name1
//will always be Marie because of it being closed over in line 150

//---------------------------------------------------

//another closure example:

// function getGreeter(name1) {
//   return function (name2) {
//     console.log("Hi " + name1 + ", meet " + name2);
//   };
// }

// let introduceMarieTo = getGreeter("Marie"); //locked in
// let introduceRosalindTo = getGreeter("Rosalind"); //locked in

// introduceMarieTo("Dorothy");
// introduceMarieTo("Albert");

// introduceRosalindTo("Barbara");
// introduceRosalindTo("Isaac");

//returns:
// Hi Marie, meet Dorothy
// Hi Marie, meet Albert
// Hi Rosalind, meet Barbara
// Hi Rosalind, meet Isaac
