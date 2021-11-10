// YOUR CODE BELOW

const myForEach = (anArr, callbackFunc) => {
  for (let i = 0; i < anArr.length; i++) {
    const currElement = anArr[i];
    callbackFunc(currElement, i);
  }
};
