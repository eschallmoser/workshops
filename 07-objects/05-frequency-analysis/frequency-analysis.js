// YOUR CODE BELOW

const frequencyAnalysis = (string) => {
  let charCount = {};
  for (let i = 0; i < string.length; i++) {
    const char = string[i];
    if (charCount[char]) {
      //if character is already in object
      charCount[char] += 1; //increase the count for that character by one
    } else {
      //if character has not already been added to object
      charCount[char] = 1; //start count at one
    }
  }
  return charCount;
};
