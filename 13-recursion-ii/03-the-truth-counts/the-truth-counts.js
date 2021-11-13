// YOUR CODE BELOW

const theTruthCounts = (anArr) => {
  //store the number of truthy vals here
  let truthyVals = 0;

  //iterate through the array
  anArr.forEach((val) => {
    //check if current element is an array
    if (Array.isArray(val)) {
      //if so, recurse and add the total number
      //of truthy vals to the number here
      truthyVals += theTruthCounts(val);
      //otherwise, add the truthiness of the value
      //to the total
    } else if (val) ++truthyVals;
  });
  //return the number of truthy values
  return truthyVals;
};
