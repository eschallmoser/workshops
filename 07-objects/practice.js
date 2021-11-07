//create an object with characteristics of a person

const person = {
  eyeColor: "brown",
  sunSign: "Sagittarius",
  isSmart: true,
  age: 35,
};

person.occupation = "club director";
delete person.eyeColor;
person.faveColors = ["teal", "hot pink", "lavender"];

//define a function that takes an object as a parameter
//when called, the function should return this string:
// myFaveColors(person) --> "My favorite colors are: Teal, Hot Pink, and Lavender."

const capitalizeString = (aStr) => {
  const anArr = aStr.split(" "); //["hot", "pink"]
  let capitalStr = [];

  for (let i = 0; i < anArr.length; i++) {
    const currentStr = anArr[i];
    capitalStr.push(currentStr.charAt(0).toUpperCase() + currentStr.slice(1));
  }

  return capitalStr.join(" ");
};

// console.log(capitalizeString("hot pink")); //Hot Pink

const myFaveColors = (object) => {
  let colorString = "My favorite colors are: ";

  for (let i = 0; i < person.faveColors.length; i++) {
    const capitalColor = capitalizeString(person.faveColors[i]);

    if (i === person.faveColors.length - 1) {
      colorString += "and " + capitalColor + ".";
    } else {
      colorString += capitalColor + ", ";
    }
  }

  return colorString;
};

console.log(myFaveColors(person));
