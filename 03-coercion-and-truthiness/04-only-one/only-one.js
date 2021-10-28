// YOUR CODE BELOW

// MY FIRST ATTEMPT: was missing the full logic and not fully utilizing the logical operators
// const onlyOne = (arg1, arg2, arg3) => {
//   if ((!!arg1, !arg2, !arg3)) {
//     return true;
//   }
//   if ((!arg1, !!arg2, !arg3)) {
//     return true;
//   }
//   if ((!arg1, !arg2, !!arg3)) {
//     return true;
//   }
//   if (!arg1 && !arg2 && !arg3) {
//     return false;
//   }
//   if (arg1 && arg2 && arg3) {
//     return false;
//   }
// };

// WHAT I FOUND ON GOOGLE:
const onlyOne = (arg1, arg2, arg3) => {
  let truthyCount = !!arg1 + !!arg2 + !!arg3;
  return 0 < truthyCount && truthyCount < 2;
};

// GIVEN SOLUTION:
// const onlyOne = (value1, value2, value3) => {
//   // if only the first value is truthy, return true
//   if (!!value1 && !value2 && !value3) {
//     return true;
//   }

//   // if only the second value is truthy, return true
//   if (!value1 && !!value2 && !value3) {
//     return true;
//   }

//   // if only the third value is truthy, return true
//   if (!value1 && !value2 && !!value3) {
//     return true;
//   }

//   // in any other case, return false
//   return false;
// };
