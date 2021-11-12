// YOUR CODE BELOW

const getDogBreeder = (defaultName, defaultAge) => {
  return (dogBreeder = (name = defaultName, age = defaultAge) => {
    const dogDict = {};

    dogDict.name = name;
    dogDict.age = age;

    if (typeof dogDict.name === "number") {
      dogDict.name = defaultName;
      dogDict.age = name;
    }

    return dogDict;
  });
};
