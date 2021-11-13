//RECURSION

//recursion occurs when a function calls itself!

//recursion is an alternative to iteration

//THE CALL STACK

//JS is 'single-threaded' - can only run one function at a time

//the call stack is the structure JS uses to figure out which function
//it should be running at any point in time

//whenever we call a function, it's added to the top of the call stack

//JS will execute whatever function is on top of the stack

// function first() {
//   console.log("I am first!");
// }

// function second() {
//   console.log("I am second!");
// }

// first();
// //gets added to the top of the call stack
// //returns I am first
// //is removed from the call stack

// second();
//gets added to the top of the call stack
//returns I am second
//is removed from the call stack

//----------

// //ANOTHER EXAMPLE:
// function first() {
//   console.log("I am first!");
//   second();
//   console.log("First is finished");
// }

// function second() {
//   console.log("I am second!");
// }

// first(); //first is called and is added to the top of the call stack
//first returns I am first
//first calls second --first is paused while second runs
//second is added to the top of the call stack, above first
//second returns I am second and then is removed from the call stack
//first begins running again and returns First is finished
//and is removed from the call stack

//---------------------------------------

//EXAMPLE -- COUNTDOWN

//write a function that counts down to 1

//how to solve with iteration:
// function countdown(num) {
//   for (let i = num; i >= 1; i--) {
//     console.log(i);
//   }
// }

// countdown(5);
//returns:
//5
//4
//3
//2
//1

//refactored solutuon, writing a function that takes a number and logs it out
// function countdown(num) {
//   console.log(num);
// }

// countdown(5);
// countdown(4);
// countdown(3);
// countdown(2);
// countdown(1);

//every time we called countdown, we subtracted one from the previous num

//instead of manually calling countdown over and over, why not have
//countdown call itself, subtracting one from num each time

//solved with recursion:
// function countdown(num) {
//     console.log(num)
//     countdown(num - 1);
// }

// countdown(5);

//but right now, it doesn't now when to stop!
//because our function was instructed to call itself every time,
//the function ends up calling itself forever until our computer runs
//out of memory

//but we can write a stop condition so the function will eventually
//stop calling itself

// function countdown(num) {
//   //here's our stop condition, commonly know as the 'base case'
//   if (num < 1) {
//     console.log("done!");
//   }
//   //here's our 'recursive case'
//   else {
//     console.log(num);
//     countdown(num - 1);
//   }
// }

// countdown(3);
//returns:
//3
//2
//1
//done!

//two takeaways from this example:
//1. you need to define a base case!
//2. your recursive case must change the input to the function
//so that you will eventually trigger the base case, or else
//an infinite loop is still a danger!

//RETURNING FROM RECURSIVE CALLS:
//recursion becomes more complicated when the function must
//return a value

//good practice is to start by defining a base case

//base cases are what often occurs when there is a simple input that
//expects a simple output

//test that the base case works before working with the
//recursive case

//example--factorial function

//define a function, factorial, that takes a number and returns the
//factorial of that number

//reminder about factorials:
// 0! === 1
// 1! === 1
// 2! === 2 (2 * 1)
// 3! === 6 (3 * 2 * 1)
// 4! === 24 (4 * 3 * 2 * 1)
// 5! === 120 (5 * 4 * 3 * 2 * 1)

//first thing to consider: what look like simple inputs/outputs
//we can use to build a base case

// function factorial(num) {
//   //base case: num is 0 or 1
//   if (num === 0 || num === 1) {
//     return 1;
//   }
// }

// factorial(0);
// factorial(1);

//with our base case set, we just need to remember that our recursive
//case needs to bring num closer and closer to 1 or 0 so that we
//eventuall hit our base case

//notice--an interesting pattern!

// 0! === 1
// 1! === 1
// 2! === 2 (2 * factorial(1))
// 3! === 6 (3 * factorial(2))
// 4! === 24 (4 * factorial(3)
// 5! === 120 (5 * factorial(4))

// function factorial(num) {
//   //base case: num is 0 or 1
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//recursive case: num must get closer to 0 or 1
//we know we have to call factorial again in the recursive case
//if num === 2, what do we get if we call factorial again with
//num - 1?
//1
//undefined
//okay, from the pattern earlier, we know that 2! === 2 * 1
// console.log(factorial(num - 1));
// console.log(num * factorial(num - 1));
//2
//undefined
//now we just need to return something
//   let result = num * factorial(num - 1);
//   return result;
//   //2
// }

// //it's best to write your recursive case using the simplest possible
// //input that will result in a recursive call
// // let result = factorial(2);
// // console.log(result);

// console.log(factorial(2));

// function factorial(num) {
//   if (num === 0 || num === 1) {
//     return 1;
//   }
//   let result = num * factorial(num - 1);
//   return result;
// }

// let result = factorial(5);
// console.log(result);

//what's happening in the call stack:
//factorial(5) is called, and since the result is 5 * factorial(4),
//factorial(4) is then called, and so on, until the base case is reached,
//with each new function getting put on the top of the call stack as it's
//called. Once it reaches the base case, then it goes down the call stack,
//with each function expression taking on the value of it's return value
//as we go down the call stack, until we get back down to factorial(5)
//and finally return the value of 120
//we are using the call stack to represent the recursive iterations of
//the factorial expression getting smaller

//three takeaways from this example:
//1. define your base case first, using simple inputs/outputs
//2. define your base case and test it, using the simplest
//possible input that results in one recursive call to the
//base case
//3. test your function against more-complex inputs

//----------------------------------------------------------

//RECURSION AND ITERABLES

//you can use recursion with any data type in JS

//if you're asked to recurse through arrays or strings, the base case
//often occurs when the iterable is empty or has a length of one

//imagine finding the sum of numbers in an array

//sumArray([4]) //if array.length === 1, the sum is easy to calculate

//if the base case required the iterable to have a length of 1 or 0,
//it must mean that the recursive case has to reduce the length of the
//iterable with every recursive call

//-----------------------------------------------------------

//OTHER RECURSION HINTS

//always start with the base case

//test recursive case with simplest possible input that will result in
//one recursive call to the base case

//ask yourself: what type of thing should my function return? base case
//and recursive case should return the same type of thing!

//use console.log to debug and test
