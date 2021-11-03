// Objects!!!

//--an object is a collection of key-value pairs
//also called a dictionary

//--like arrays, objects store values, but instead of storing them in
// numeric "indexes", objects store values in string "keys"

//EXAMPLE

// let myArray = ["value1", "value2"];

// let myObject = {
//   key1: "value1",
//   key2: "value2",
// };

// console.log(myArray[0]);
// console.log(myObject["key1"]); //both return value1

//Why are objects useful?

// consider represting Pusheen the Cat as an array
// let pusheen = ["Pusheen", 7, "gray and tabby"];

//an array is a good place to hold an ordered list of values, but it
// doesn't store any information about what those values represent

// an object's string keys allows objects to store more information
// about the values within it

//the same information, but stored as an object:
// let pusheen = {
//   name: "Pusheen",
//   age: 7,
//   color: "gray and tabby",
// };

// console.log(typeof {}); //returns object

// let pusheen = {
//   name: "Pusheen",
//   age: 7,
//   color: "gray and tabby",
//   sound: "meow",
// };

//Adding and Accessing values

// bracket notation:
// console.log(pusheen["name"]); //returns Pusheen

// dot notation:
// console.log(pusheen.name); //this is how you end up doing it usually
// console.log(pusheen.age);
// console.log(pusheen.color);

//adding keys to an object:
// (object name) (key value name) (value)
// pusheen["owner"] = "Meg";
// can also use dot notation here for same effect
// pusheen.owner = "Meg";
// console.log(pusheen);

// can also change the value once it's been added:
// pusheen.owner = "Joe";
// console.log(pusheen);

// Removing values--use delete keyword

// delete pusheen.sound;
// console.log(pusheen);

// How to check if a key is in an object:
// use the in operator

// if ("age" in pusheen) {
//   console.log("her age is " + pusheen.age);
// }

// if ("country" in pusheen) {
//   console.log("her country is " + pusheen.country);
// } else {
//   console.log("country not defined");
// }

// country key is not defined in pusheen object
//this can be a nice way to try and check if something exists or not,
//because otherwise if you try to use something in an object that doesn't
//exist and you don't have an if statement wrapped around it, it will
//throw an error or try to substitue a value for it

//Iterating through all the keys in objects:

//something to be careful about--objects are not as reliable as arrays are
//when it comes to iterating through all the values, can't always
//guarantee that the order will be correct, but it can still be useful,
//because we don't always need to know the order things are added,
//sometimes we just needs to know all the keys and values that exist
//in an object

// for...in loop (used to loop over objects)

// for (let key in pusheen) {
//   console.log(key);
// }

//returns:  (only the keys, not the values)
// name
// age
// color
// sound

//if you wanted to see the values: (dot notation cannot be used here)
// for (let key in pusheen) {
//   console.log(pusheen[key]);
// }

// //if we want to convert the keys and values into actual strings:
// for (let key in pusheen) {
//   console.log("her " + key + " is " + pusheen[key]);
// }

//returns:
// her name is Pusheen
// her age is 7
// her color is gray and tabby
// her sound is meow

//if we wanted to get all the keys, w/o using a for...in loop

// console.log(Object.keys(pusheen));
//returns: [ 'name', 'age', 'color', 'sound' ]
//gives us all the keys as an array

// let pusheen = {
//   name: "Pusheen",
//   age: 7,
//   color: ["gray", "tabby"], //like so
//   sound: "meow",
// };

//this is useful because then we can do this:
// let keys = Object.keys(pusheen);

// and then iterate through it, just like we're used to doing with arrays:
// for (let i = 0; i < keys.length; i++) {
//   console.log(pusheen[keys[i]]);
// }
//returns:
// Pusheen
// 7
// gray and tabby
// meow

// Nesting

//--we can add arrays as key/values to an object

// let pusheen = {
//   name: "Pusheen",
//   age: 7,
//   color: ["gray", "tabby"], //like so
//   sound: "meow",
// };

//--now the colors are represented in an array, so if we wanted to
//access that array, we could do this:
// console.log(pusheen.color[0]); //returns gray
// console.log(pusheen.color[1]); //returns tabby

//--you can also add objects within objects, like so:

let pusheen = {
  name: "Pusheen",
  age: 7,
  color: ["gray", "tabby"], //like so
  sound: "meow",
  siblings: {
    sister: "Stormy",
    brother: "Pip",
  },
};

//to access Pusheen's sister, you can use multiple dot notation
console.log(pusheen.siblings.sister);
