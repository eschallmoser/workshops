// YOUR CODE BELOW

const chainReaction = (startValue, anArrOfFuncs) => {
  let finalValue = 0;

  for (let i = 0; i < anArrOfFuncs.length; i++) {
    const currentFunction = anArrOfFuncs[i];
    finalValue = currentFunction(startValue);
    startValue = finalValue;
  }

  return finalValue;
};
