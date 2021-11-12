// YOUR CODE BELOW

const partial = (callback, argA) => {
  return function (argB) {
    return callback(argA, argB);
  };
};
