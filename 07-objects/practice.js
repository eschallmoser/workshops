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

const myFaveColors = (object) => {
  let colorString = "My favorite colors are: ";

  for (let i = 0; i < person.faveColors.length; i++) {
    const currentColor = person.faveColors[i];
    const capitalColor =
      currentColor.charAt(0).toUpperCase() + currentColor.slice(1);

    if (i === person.faveColors.length - 1) {
      colorString += "and " + capitalColor + ".";
    } else {
      colorString += capitalColor + ", ";
    }
  }

  return colorString;
};

console.log(myFaveColors(person));
