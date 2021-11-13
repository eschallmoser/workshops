// YOUR CODE BELOW

const allSystemsGo = (anObj) => {
  //falsification
  //keys don't matter, we're only after the values
  //Grab all the values of the current system
  const currentSystemValues = Object.values(anObj);

  //run an 'every' test to confirm that every system is go for launch
  return currentSystemValues.every((boolOrSystem) => {
    //if it's an object, recurse on the object, making sure it is all
    //true values or true systems
    if (typeof boolOrSystem === "object") {
      return allSystemsGo(boolOrSystem);
      //otherwise simply return the value of the boolean - any false will
      //force the every call to fail
    } else {
      return boolOrSystem;
    }
  });
};
