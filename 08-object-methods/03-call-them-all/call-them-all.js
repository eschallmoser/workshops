// YOUR CODE BELOW

//empty array to store the values in--DONE
//Object.values to get access to values in object--DONE
//loop through all properties in the object--DONE
//variable to store each item that gets looped--DONE
//check if property is a method--DONE
//if the property is a method, call it with the VALUE passed in as the argument ---store this is a variable also--DONE
//push it the empty array
//return array--DONE

const callThemAll = (object, value) => {
  const returnedValues = [];
  const objectValues = Object.values(object);

  for (let i = 0; i < objectValues.length; i++) {
    const currentValueOrFunc = objectValues[i];

    if (typeof currentValueOrFunc === "function") {
      const resultOfFunc = currentValueOrFunc(value);
      returnedValues.push(resultOfFunc);
    }
  }
  return returnedValues;
};
