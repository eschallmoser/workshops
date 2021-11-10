// YOUR CODE BELOW

function functionLogger(callback, arg) {
  console.log("function starting");
  let returnValue = callback(arg);
  console.log("function complete");
  return returnValue;
}
