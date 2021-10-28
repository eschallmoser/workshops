// YOUR CODE BELOW
// 100
const zeroDarkThirty = (num1) => {
  if (num1 === 0) {
    return NaN;
  }

  let num1Str = num1.toString();

  let noZeroStr = "";
  // "100"
  for (let i = 0; i < num1Str.length; i++) {
    if (num1Str[i] !== "0") {
      noZeroStr += num1Str[i];
    }
    console.log(noZeroStr);
  }
  return parseFloat(noZeroStr);
};
