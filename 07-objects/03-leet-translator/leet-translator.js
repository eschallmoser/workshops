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
  const leetDict = {}; //an object to store the translated characters, new dictionary to reference

  for (let i = 0; i < letters.length; i++) {
    //looping through all the elements in the letters array
    //accessing the elements in the letters array (the actual alphabet)
    leetDict[letters[i]] = leetChars[i]; //setting each corresponding leet char to a letter char, by index
  }

  let translatedString = "";

  for (let i = 0; i < string.length; i++) {
    //looping through inputted argument string
    const currentCharacter = string[i].toLowerCase(); //isolating each char in string, handling case issues, then

    translatedString += leetDict[currentCharacter]; //pushing the translated variables one by one into string variable
  }

  return translatedString;
};
