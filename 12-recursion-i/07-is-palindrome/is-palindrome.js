// YOUR CODE BELOW

const isPalindrome = (aStr) => {
  //Falsification - we are simply trying to
  //disprove that this is a palindrome with our
  //code
  //if we get to the end (the base case), we can
  //assume it is a palindrome, because we could
  //not provie otherwise with our code
  //Middle out - starting at each end of the array
  //so our base case is:
  if (aStr.length <= 1) {
    return true;
  }

  const firstCharacter = aStr[0].toLowerCase();
  const lastCharacter = aStr[aStr.length - 1].toLowerCase();

  if (firstCharacter === lastCharacter) {
    //run the function on not the first char
    //and not the last char
    return isPalindrome(aStr.slice(1, -1));
  } else {
    return false;
  }
};
