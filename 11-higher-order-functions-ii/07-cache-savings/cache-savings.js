// YOUR CODE BELOW

const cacheSavings = (callbackFunc) => {
  const cache = {};

  return function (anArg) {
    if (cache[anArg]) {
      return cache[anArg];
    }
    cache[anArg] = callbackFunc(anArg);
    return cache[anArg];
  };
};
