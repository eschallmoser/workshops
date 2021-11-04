let animalNoises = [
  {
    dog: {
      America: "Woof! Woof!",
      Germany: "Wau Wau!",
      England: "Bow wow!",
      Uruguay: "Jua jua!",
      Afrikaans: "Blaf!",
      Korea: "Mong mong!",
      Iceland: "Voff voff!",
      Albania: "Ham!",
      Algeria: "Ouaf ouaf!",
    },
  },
  {
    cat: {
      America: "Meow",
      Germany: "Miauw!",
      England: "mew mew",
      Uruguay: "Miau Miau!",
      Afrikaans: "Purr",
      Korea: "Nyaong!",
      Iceland: "Kurnau!",
      Albania: "Miau",
      Algeria: "Miaou!",
    },
  },
  {
    chicken: {
      America: "Cluck cluck",
      Germany: "tock tock tock",
      England: "Cluck Cluck",
      Uruguay: "gut gut gdak",
      Afrikaans: "kukeleku",
      Korea: "ko-ko-ko",
      Iceland: "Chuck-chuck!",
      Albania: "Kotkot",
      Algeria: "Cotcotcodet",
    },
  },
];

// YOUR CODE BELOW

const petSounds = (animal, country) => {
  for (let i = 0; i < animalNoises.length; i++) {
    //iterating through all key/value pairs in the object
    let currentAnimalObj = animalNoises[i]; //valuable to store so can compare to argument passed in

    if (animal in currentAnimalObj) {
      //if argument passed in is an animal in the object, then...
      let currentAnimal = currentAnimalObj[animal]; //variable to store the actual current animal that is both the arugment and in object
      let currentAnimalNoise = currentAnimal[country]; //accessing the key value pair that gives the animal noise, storing it in variable
      let animalsubject = animal[0].toUpperCase() + animal.slice(1); //getting plural of arugment passed in by isolating it and adding s
      return `${animalsubject}s in ${country} say ${currentAnimalNoise}`; //constructing final string, using our variables
    }
  }
};
