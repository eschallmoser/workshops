//Object methods
//--methods are actions that you can perform on a value
//--many methods are built into JS, we don't always have to define
//them ourselves

// let graceHopper = {
//   first: "Grace",
//   last: "Hopper",
//   rank: "Rear Admiral",
//   //   myMethod: function () {
//   //     console.log("I'm from a method!");
//   //   },
//   sayQuote: function () {
//     console.log(
//       "It's easier to ask for forgiveness than it is to get permission."
//     );
//   },
// };

//-objects can hold any type of value, including functions
//-if we add a function to this object, that function is now a
//method of the object

// graceHopper.myMethod(); //returns I'm from a method!
// graceHopper.sayQuote(); //returns the quote

//-methods on an object generally should perform an action that's relevant to the
// idea or concept represented by the object itself

// let graceHopper = {
//   first: "Grace",
//   last: "Hopper",
//   rank: "Rear Admiral",
//   sayQuote: function () {
//     console.log(
//       "It's easier to ask for forgiveness than it is to get permission."
//     );
//   },
//   getAge: function (year) {
//     return year - 1906;
//   },
//   greet: function (name) {
//     console.log("Hello " + name + "!");
//   },
// };

// console.log(graceHopper.getAge(2021));
// graceHopper.greet("Erin");

// this keyword--
//-a dynamic reference
// to the object itself
// inside of the methods of that object

//adding to the greet function so that Grace Hopper then
//introduces herself:

// let graceHopper = {
//   first: "Grace",
//   last: "Hopper",
//   rank: "Rear Admiral",
//   sayQuote: function () {
//     console.log(
//       "It's easier to ask for forgiveness than it is to get permission."
//     );
//   },
//   getAge: function (year) {
//     return year - 1906;
//   },
//   greet: function (name) {
//     console.log(`Hello ${name}! My name is ${this.first} ${this.last}.`);
//   },
// };

// graceHopper.greet("Erin");

const calc = {
  total: 0,
  plus: function (num) {
    this.total += num;
    return this.total;
  },
  minus: function (num) {
    this.total -= num;
    return this.total;
  },
};

calc.plus(5);
calc.plus(5);
calc.minus(3);
console.log(calc.total);
