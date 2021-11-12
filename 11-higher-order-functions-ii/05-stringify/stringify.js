// YOUR CODE BELOW

const stringify = (callback) => {
  return function () {
    return String(callback());
  };
};
