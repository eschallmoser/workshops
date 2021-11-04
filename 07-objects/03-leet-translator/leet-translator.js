let letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
let leetChars = [
  "@",
  "8",
  "(",
  "|)",
  "3",
  "ph",
  "g",
  "#",
  "l",
  "_|",
  "|<",
  "1",
  "|'|'|",
  "//",
  "0",
  "|D",
  "(,)",
  "|2",
  "5",
  "+",
  "|_|",
  "|/",
  "|/|/'",
  "><",
  "j",
  "2",
];

// YOUR CODE BELOW
const leetTranslator = (string) => {
  const leetDict = {}; //an object to store the translated characters, until the for loop has iterated through all the chars

  for (let i = 0; i < letters.length; i++) {
    //accessing the elements in the letters array (the actual alphabet)
    leetDict[letters[i]] = leetChars[i]; //individually translating characters, by accessing both arrays
  }

  let translatedString = "";

  for (let i = 0; i < string.length; i++) {
    const currentCharacter = string[i].toLowerCase(); //handling case issues, then...

    translatedString += leetDict[currentCharacter]; //pushing the translated variables one by one into string variable
  }

  return translatedString;
};
