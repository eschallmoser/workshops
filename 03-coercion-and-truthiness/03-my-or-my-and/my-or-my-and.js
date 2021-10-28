// YOUR CODE BELOW

// const myOr = (arg1, arg2, arg3) => {
//   if (!!arg1) {
//     return arg1;
//   }
//   if (!!arg2) {
//     return arg2;
//   }
//   if (!!arg3) {
//     return arg3;
//   } else {
//     return arg3;
//   }
// };

const myOr = (arg1, arg2, arg3) => arg1 || arg2 || arg3;
const myAnd = (arg1, arg2, arg3) => arg1 && arg2 && arg3;

// const myAnd = (arg1, arg2, arg3) => {
//   if (!arg1) {
//     return arg1;
//   }
//   if (!arg2) {
//     return arg2;
//   }
//   if (!arg3) {
//     return arg3;
//   } else return arg3;
// };
