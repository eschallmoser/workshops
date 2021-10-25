// YOUR CODE BELOW

const mostVowels = (aStr) => {
  // turning the string into an array so each word and each character can be checked
  const wordsArray = aStr.split(".").join("").split(",").join("").split(" ");
  //   defining what vowels are, so we have something to compare each character to
  const VOWELS = "aeiouAEIOU";

  //   variable that will store how many vowels are in a word
  let maxVowelCount = 0;
  // variable that will store the word that has the most vowels
  let maxWord = "";

  //   this loops through each word
  for (let i = 0; i < wordsArray.length; ++i) {
    const currentWord = wordsArray[i];

    // variable to store how many vowels in the current word being checked
    let currentVowelCount = 0;

    // this loops through each character, checking for vowels
    for (var j = 0; j < currentWord.length; ++j) {
      const currentLetter = currentWord[j];
      // this is what helps check if there is a vowel
      if (VOWELS.indexOf(currentLetter) !== -1) {
        //   this is what happens if vowels are found
        ++currentVowelCount;
      }
    }
    // this gets our data ready, because our ultimate goal is to return the word that has the most vowels, so this if statement
    // reassigns variables based on vowel count, once all the iterations are done
    if (currentVowelCount > maxVowelCount) {
      maxVowelCount = currentVowelCount;
      maxWord = currentWord;
    }
  }
  // this returns the word from the string that has the most vowels
  return maxWord;
};

// what I learned about:
// -nested for loops
// -making an array to set a search for vowels and/or specific characters
//  the .split method which allows the function to search multiple words
