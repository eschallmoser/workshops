// YOUR CODE BELOW

const arrayFlattener = (a2DArr) => {
  let flatArray = [];

  for (let i = 0; i < a2DArr.length; i++) {
    let element = a2DArr[i];

    if (Array.isArray(element)) {
      //   for (let j = 0; j < element.length; j++) {
      //     flatArray.push(element[j]);
      //   }
      flatArray = flatArray.concat(element);
    } else {
      flatArray.push(element);
    }
  }
  return flatArray;
};
