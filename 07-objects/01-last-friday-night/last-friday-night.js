// YOUR CODE BELOW

// WHAT I TRIED:
// const lastFridayNight = (anArr) => {
//   let totalTransactions = 0;
//   let newArray = [];

//   for (let key in anArr) {
//     let currentKey = anArr[key];
//     if (currentKey > 0) {
//       newArray.push(currentKey);
//     }
//   }

//   for (let i = 0; i < newArray.length; i++) {
//     totalTransactions += newArray[i];
//   }

//   return totalTransactions;
// };

// const lastFridayNight = (anArr) => {
//   let newArray = Object.values(anArr);
//   let totalTransactions = 0;

//   for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] > 0) {
//       totalTransactions += newArray[i];
//     }
//   }

//   return totalTransactions;
// };

//Fixing mine:
const lastFridayNight = (transactions) => {
  let total = 0;

  for (let i = 0; i < transactions.length; i++) {
    let currentTrans = transactions[i]; //accessing the object within the array
    total += currentTrans.amount; //accessing the amount key value within the object
  }

  return total;
};

// FullStack's code solution:
// const lastFridayNight = (transactions) => {
//   let total = 0;

//   // loop through all the transactions
//   for (let i = 0; i < transactions.length; i++) {
//     // store each transaction in a variable
//     let transaction = transactions[i];
//     //add the value stored in the object's amount property to the running total
//     total += transaction.amount; //this is what I was getting stuck on
//   }

//   return total;
// };

//Elliott's solution:
// const lastFridayNight = (listOfTrans) => {
//   let total = 0;

//   for (let i = 0; i < listOfTrans.length; i++) {
//     const { amount } = listOfTrans[i]; //destructing here!!!

//     total += amount;
//   }

//   return total;
// };
