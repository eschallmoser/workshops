// Array--
// --an array is a list-like data structure in JS
// --list-like means it helps you organize a lot of data

// examples of arrays:
// let numbers = [1, 2, 3];
// let names = ['George', 'John', 'Thomas'];
// let aVariable = 'a value';
// let mixedBag = [30, true, 'apples', null, aVariable]

// each value in an array is called an element

// let names = ["George", "John", "Scott"];

// console.log(names);
// console.log(typeof names); //returns object (an array is actually an object
//                  of the type array)

// Array.isArray method--
// -used to check if a variable is an array!
// console.log(Array.isArray(names)); //true
// console.log(Array.isArray("hello world")); //false

// Bracket Access
// -the most common way to access elements in an array
// -counting starts from ZERO!
// console.log(names[1]); //returns John, the second element! We have to make
// // one jump to get to it
// console.log(names[0]); //returns George, the first element! We have to make
// // zero jumps to get to it

// // -brackets can also be used to assign values in the array
// names[0] = "David";
// console.log(names); //now returns David, John, Scott, changed George to David

// -brackets can be used both to SET and GET values in an array

// -the INDEX refers to the position of different values in an array
// -do NOT confuse index with value!! index is always a number

// let names = ["George", "John", "Scott"];

// Finding out how long an array is/accessing the last value
// -don't want to hard code it to the last index, because values
// can always be added to an array, and we won't always know
// how long an array is

// finding out how long array is:
// console.log(names.length); //returns 3, the actual total length, not the values

// // accessing the last value in an array:
// console.log(names[names.length - 1]); //because arrays are ZERO-index,
//we have to do -1 to access last value,
//if not, we get undefined

// let names = ["George", "John", "Scott"];

// .push method--add something to the end of an array
// names.push("Jane");
// console.log(names);

// .pop method--return AND remove the most recently added item to the array
// (if all we wanted to do was access the last value, we'd use .length)
// let latestAdd = names.pop();
// console.log(latestAdd); //returns Jane
// console.log(names); //returns George, John, Scott

// .shift method--removes first element from an array
// console.log(names);

// let firstElRemoved = names.shift();
// console.log(firstElRemoved); //returns George
// console.log(names); //returns John, Scott, Jane

// let names = ["George", "John", "Scott"];

// // .unshift method--add an element to the beginning of an array

// // console.log(names);
// names.unshift("Doug");
// // console.log(names);

// // .indexOf --also an array method, and works the same way as the string
// // method of the same name
// console.log(names.indexOf("George")); //returns 1
// console.log(names[1]); //returns George

// console.log(names.indexOf("Erin")); //returns -1; Erin is not an element in this array

// if (names.indexOf("Erin") > -1) {
//   console.log("Person found");
// } else {
//   console.log("Person NOT found");
// }

// .slice method--extracts and returns a portion of the array

// let names = ["Brody", "Hooper", "Quint"];

// console.log(names.slice(0, 1)); //returns Brody
// console.log(names.slice(1, 2)); //returns Hooper

// // slice is non-destructive--it doesn't change the original array
// console.log(names); //still returns Brody, Hooper, Quint

// .includes method--checks if a value is in an array, easier to read than indexOf

// console.log(names.includes("Doug")); //returns false
// console.log(names.includes("Brody")); //returns true

//  .reverse method--returns array elements in reverse order
// destructive--modifies the array itself, doesn't make a new copy

// console.log(names); //returns Brody, Hooper, Quint
// names.reverse(); //doesn't return, just reverses in place
// console.log(names); //returns Quint, Hooper, Brody, from now on, it remains reversed!!
