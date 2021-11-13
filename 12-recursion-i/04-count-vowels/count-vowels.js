// YOUR CODE BELOW

const countVowels = (string) => {
  const VOWELS = "aeiouAEIOU";
  //at the end, we return 0 so that nothing gets
  //added to the total for the final empty string
  if (!string.length) {
    return 0;
  }

  //we grab the first character of each string and
  //see if it's a vowel
  const firstChar = string[0];

  //if it is a vowel, we add one, if not,
  //we just move on
  if (VOWELS.indexOf(firstChar) !== -1) {
    return 1 + countVowels(string.slice(1));
  } else {
    return countVowels(string.slice(1));
  }
};
