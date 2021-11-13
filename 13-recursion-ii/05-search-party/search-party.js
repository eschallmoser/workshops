// YOUR CODE BELOW

const searchParty = (name, world) => {
  //let's grab the names of all the places in the current hierarchy and
  //store them
  const places = Object.keys(world);

  //let's iterate through those places
  for (let i = 0; i < places.length; i++) {
    const place = places[i];

    //let's store the value of whatever is at that location
    const nextValue = world[place];

    //if our name is at that location, then...
    if (nextValue === name) {
      //let's return what location they're at
      return [place];
      //if this value is an array of multiple people
    } else if (Array.isArray(nextValue)) {
      //let's discover if our name is one of the people in the array
      const isInArray = nextValue.some((person) => person === name);

      //if so, then we found the place, so let's return it
      if (isInArray) return [place];

      //otherwise, if the value of what's at this location is more
      //sub locations, then let's recurse on them and figure out
      //if our name is inside of it
    } else if (typeof nextValue === "object") {
      const inNextLocation = searchParty(name, nextValue);

      //if our name is inside of it, then we can add on their location
      //to the current location to get the full address of where they are
      if (inNextLocation) return [place].concat(inNextLocation);
    }
  }

  //if we could not find the person after searching entire world object
  return null;
};
