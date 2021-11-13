// YOUR CODE BELOW

const backwardString = (string) => {
  //we always want to start with logging the last
  //character of the string
  console.log(string[string.length - 1]);

  if (string.length > 1) {
    //if what we just logged wasn't the last character,
    //then what we wanna do is call backwardString
    //function on this string, but with the last
    //character taken off of it
    //we remove a piece of the original input as
    //we recurse, until we get to nothing left
    backwardString(string.slice(0, -1));
  }
};
