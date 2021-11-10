// YOUR CODE BELOW
// let specialPets = [
//   {
//     name: "Sadie",
//     species: "cat",
//   },
//   {
//     name: "Layla",
//     species: "cat",
//   },
//   {
//     name: "Bogie",
//     species: "dog",
//   },
// ];

// whosASpecial(specialPets);
// => Sadie the cat is very special! Layla the cat is very special! Bogie the dog is very special!

// array1.forEach(element => console.log(element));

const whosASpecial = (arrOfPets) => {
  let petString = "";

  arrOfPets.forEach((currentPet) => {
    petString += `${currentPet.name} the ${currentPet.species} is very special! `;
  });

  return petString.trim();
};
