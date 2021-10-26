const mostVowels = (aStr) => {
  const wordsArray = aStr.split(" ");
  const VOWELS = "aeiouAEIOU";

  let maxVowelCount = 0;
  let maxWord;

  for (let i = 0; i < wordsArray.length; i++) {
    const currentWord = wordsArray[i];
    let currentVowelCount = 0;
    for (let j = 0; j < currentWord.length; j++) {
      if (VOWELS.includes(currentWord[j])) {
        currentVowelCount++;
      }
    }
    if (currentVowelCount > maxVowelCount) {
      maxVowelCount = currentVowelCount;
      maxWord = currentWord;
    }
  }
  return maxWord;
};

console.log(
  mostVowels(
    "Doug and Erin are moving to Aberdeen, Washington or Missoula, Montana"
  )
);
