// YOUR CODE BELOW

// using Default Parameters instead of If statements

const mySlice = (
  originalString,
  startIdx = 0,
  endIdx = originalString.length
) => {
  let slicedString = "";
  for (let i = startIdx; i < endIdx; i++) {
    let char = originalString[i];
    slicedString += char;
  }
  return slicedString;
};
