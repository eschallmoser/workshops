// YOUR CODE BELOW

const countToTen = (num) => {
  if (num < 10) {
    console.log(num);
    //it's not 10, so we need to call ourselves again
    //plus one, to get closer to 10
    countToTen(num + 1);
  } else {
    // it is 10, so we don't need to call ourselves again
    console.log(num);
  }
};
