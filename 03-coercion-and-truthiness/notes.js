// EXPLICIT COERCION-when we change the type of a variable into a different type

// let num = 10;
// console.log(typeof num);

// we can coerce num from being a number to being a string
// let numStri = String(num);
// console.log(numStri);
// console.log(typeof numStri);

// string to number
// let str = "1000";
// console.log(typeof str);
// let strNum = Number(str);
// console.log(strNum);
// console.log(typeof strNum);

// what's the point of explicit coercion???--later it will become clear, keep the question in your mind

// ********************************************************************************

// IMPLICIT COERCION--also changes the type of a variable, but it's something that JS does for us

// let sum = 10 + 20; //30
// let concatSum = "10" + "20"; //1020
// console.log(sum);
// console.log(concatSum);
// console.log(typeof sum);
// console.log(typeof concatSum);

// let notSure = 10 + "20"; //will be 1020 because string always wins
// console.log(notSure);

// --------------

// another example of implicit coercion (==) the double equals
// the double equals checks ONLY for the core values being equal to each other
// it does NOT check that the types are equal to each other

// console.log(10 == 10);
// console.log("10" == 10);
// both return true, which kinda makes sense because in the second example
// both 10s are being coerced into strings and then compared to each other

// == can be very unpredictable, which is why a lot of the time, it
// doesn't make sense to use it
// console.log(true == "true"); //this returns false!
// console.log("" == false); //returns true (empty string is falsy)
// console.log("1" == true); //returns true (string is truthy), but also
// JS coerced true to be 1

// let newBool = Boolean("i am a string");
// console.log(newBool); //returns true, but why?

// TRUTHY AND FALSEY

// whenever something is passed into a Boolean, JS has some rules
// to determine whether that coercion is true or false

// EXAMPLES OF TRUTHY VALUES
// console.log(typeof Boolean("normal string")); //returns Boolean
// console.log(Boolean("normal string")); //returns true
// console.log(Boolean(10)); //returns true

// EXAMPLES OF FALSEY VALUES
// console.log(Boolean(""));
// console.log(Boolean(0)); //every other number is truthy
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(NaN));

// if (0) {
//     console.log("is truthy");
// } else {
//     console.log("is falsey")
// }

// put an exclamation mark in front of value to change its Boolean value

// console.log(!0); //returns truthy
// console.log(!"string"); //returns falsey
// console.log(!""); //returns truthy

// double exclamation gives you the truthiness of something, shortcut version
// of doing Boolean()

//------------------------------------------------------------------------

// Logical Operators
// && --AND--checks that both values are true, can also do more than 2 values
//  || --OR--checks that one of the values are true
