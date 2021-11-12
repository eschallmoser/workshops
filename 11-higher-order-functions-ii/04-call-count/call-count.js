// YOUR CODE BELOW

const callCount = () => {
  let totalCalls = 0;

  return function () {
    return (totalCalls += 1);
  };
};
