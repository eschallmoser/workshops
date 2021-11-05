// dogBreeder('Sam', 12)    // => {name: 'Sam', age: 12}

//adding keys to an object:
// (object name) (key value name) (value)
// pusheen["owner"] = "Meg";
// can also use dot notation here for same effect
// pusheen.owner = "Meg";
// console.log(pusheen);

// YOUR CODE BELOW

const dogBreeder = (name = "Steve", age = 0) => {
  const dogDict = {};

  dogDict.name = name;
  dogDict.age = age;

  if (typeof dogDict.name === "number") {
    dogDict.name = "Steve";
    dogDict.age = name;
  }

  return dogDict;
};
