// Write a function `exponentiate` that accepts two arguments:
// 1. base (number)
// 2. power (number)

// `exponentiate` should return the result of raising the base by the power.
// Assume the power argument will always be an integer greater than or equal to zero.
// Don't forget that any number raised to the 0th power is equal to 1!

// YOUR CODE BELOW

// const exponentiate = (base, power) => {
//   let result = 1;
//   for (let i = 1; i <= power; i++) {
//     result *= base;
//   }
//   return result;
// };

const exponentiate = (base, power) => base ** power;
