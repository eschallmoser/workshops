// YOUR CODE BELOW

const cloneMachine = (animalObject) => {
  const returnedClone = {
    name: animalObject.name + "Clone",
    species: animalObject.species,
    offspring: [],
  };

  animalObject.offspring.push(returnedClone.name);

  return returnedClone;
};
