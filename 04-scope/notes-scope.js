// Scope--
// scope refers to which variables can be accessed by your code at
// a specific location in your code

// let wow = "wow";
// console.log("I can access 'wow' because it's in scope");

// Global Scope--
// -JS is 'lexically scoped,' which means the location at which a variable
// is declared determines it scope
// -a variable that is declared outside of a function is globally scoped,
// meaning it can be referenced from any line of code throughout the file

// let global = "ear";

// console.log("outer", global); //outer ear

// function funFunction() {
//   console.log("inner", global); //this global is accessing the global
//   //                              defined outside of the function
// }

// funFunction(); //inner ear

// Global Scope--
// -even though a global variable can be referenced from anywhere in your
// code, the value assigned to the variable cannot be accessed until after
// the assignment operation occurs, therefore the ordering of when you
// assign it is still very important

// console.log(waitForIt); //returns undefined because variable isn't
//                          assigned until after console log, on line 34

// let waitForIt = "here I am";

// console.log(waitForIt); //returns here I am because variable has been
//                          assigned before, on line 34

// general principles--
//-when you write code, you want to minimize the amount of stuff that
// you have to think about in reasoning with what that code is doing
// -your code should impact as little as possible, this makes our code
// easier to maintain over time, because we can specifically see what
// the code is doing
// -the more global variables a code interacts with, the harder it will
// be for one person to reason about how those global variable will
// change over time

// Functional Scope--
// -variables declared inside of a function are 'locally-scoped' and
// they cannot be referenced outside of the function

// function happyFunction() {
//   let message = "I am so happy!";
//   console.log(message);
// }

// happyFunction(); //returns I am so happy
// console.log(message); //returns undefined because the message variable
//                      alone cannot be referenced outside of the function

// What if a message is defined locally and globally?

// let message = "think globally";

// function logAMessage() {
//   let message = "act locally";
//   // JS will look for message locally FIRST and go with whatever it finds
//   //   first!
//   console.log(message);
// }

// logAMessage(); //will return act locally, because that's the first variable
// //              that is found

// console.log(message); //will return think globally because this console log
//                      is in global scope so that's the closest variable

// another example--

// let message = "think globally";

// function logAMessage() {
//   let msg = "act locally";
//   console.log(message);
// }

// logAMessage(); //will return think globablly because if JS can't find
//              a variable locally, it will look at the scope outside
//              the function, in this case, the global scope, and see if
//              the variable is defined there

// Functional Scope--
// -parameters are also locally scoped

// let message = "think globally";

// function logAMessage(message) { //basically saying let message = act locally
//   console.log(message);
// }

// logAMessage("act locally"); //the parameter is the equivalent of a local variable

// Functional Scope--
// -consider nested functions

// here we have THREE scopes: a function scope, another function scope,
// //                            and a global scope
// let globalVar = "global"; //this can be accessed by all code

// function outer() {
//   //this function gets called first
//   let outerVar = "outer";

//   function inner() {
//     let innerVar = "inner";
//     console.log(globalVar, outerVar, innerVar);
//   }
//   inner(); //this function gets called as part of the first
//   //                         function being called
// }

// outer(); //this returns global outer inner because of the console log
//         in the inner function, for the first var, had to go up two scopes,
//         for the second var, had to go up one scope, for the last var,
//         found that locally

// Functional Scope--
// -scopes can go from inner to outer, but not from outer to inner
// -the inner function always looks for a local declaration before going
// to the next level of scope

// Block Scope--
// -any block of code {code inside of curly brackets} creates its own
// scope too
// -the pre-ES6 var keyword ignores block scope!!!
//      key difference between var and let

// Scope Best Practices--
// -functions generally should not change globally scoped variables
// -avoid cluttering the global namespace with lots of variables
// -only declare variables globally if they need to be accessed
// globablly (which is not really that common)
