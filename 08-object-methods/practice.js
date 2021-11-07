const payload = {
  cards: [
    {
      cardID: 1,
      cardName: "The Fool",
      cardNum: 0,
      rulingPlanet: "Pluto",
    },
    {
      cardID: 2,
      cardName: "The Magician",
      cardNum: 1,
      rulingPlanet: "Saturn",
    },
    {
      cardID: 3,
      cardName: "The High Priestess",
      cardNum: 2,
      rulingPlanet: "Jupiter",
    },
  ],
};

//define a function that accepts an object as a parameter--the object above, payload
//the function should return:
//--this string (for all three cards): "You pulled The Fool (0), with the ruling planet of Pluto"

//access property of object
//loop through the property's array
//use elements from each array to construct a string

// const tarotFunction = (object) => {
//   const cardsArr = object["cards"];

//   for (let i = 0; i < cardsArr.length; i++) {
//     console.log(
//       `You pulled ${cardsArr[i].cardName} (${cardsArr[i].cardNum}), with the ruling planet of ${cardsArr[i].rulingPlanet}.`
//     );
//   }
// };

// tarotFunction(payload);

//--------------------------------------------------------------------

//define a function that accepts two arguments: object(payload) and a string (tarot card name)
//if card is in object, function should return "The Fool, 0, Pluto"
//else return "This card was not found"

const tarotCardFinder = (cardObj, cardName) => {
  const keyStr = Object.keys(cardObj)[0];
  const cardsArr = cardObj[keyStr];

  for (let i = 0; i < cardsArr.length; i++) {
    if (cardsArr[i].cardName === cardName) {
      return `${cardsArr[i].cardName}, ${cardsArr[i].cardNum}, ${cardsArr[i].rulingPlanet}`;
    }
  }
  return "This card was not found";
};

console.log(tarotCardFinder(payload));
