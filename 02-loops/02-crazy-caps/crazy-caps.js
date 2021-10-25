// YOUR CODE BELOW

const crazyCaps = (word) => {
  let changedWord = "";
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 1) {
      changedWord += word[i].toUpperCase();
    } else {
      changedWord += word[i].toLowerCase();
    }
  }
  return changedWord;
};
