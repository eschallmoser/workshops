let tacoCatInc = {
  gourmetShell: {
    "hard treat shell": { cost: 2, quantity: 100 },
    "soft treat shell": { cost: 1.5, quantity: 100 },
  },

  gourmetFishFilling: {
    salmon: { cost: 5, quantity: 100 },
    tuna: { cost: 5.5, quantity: 100 },
    sardines: { cost: 1.5, quantity: 100 },
  },

  gourmetVeggie: {
    "cat grass": { cost: 1, quantity: 100 },
  },

  gourmetSeasoning: {
    "cat nip": { cost: 0.5, quantity: 100 },
    "treat dust": { cost: 0.1, quantity: 100 },
  },

  cash: 0,
};

// YOUR CODE BELOW

tacoCatInc.currentInventory = function () {
  let currentValue = 0;

  const inventoryObjs = Object.keys(this);

  for (let i = 0; i < inventoryObjs.length; i++) {
    const inventoryItemsObj = this[inventoryObjs[i]];

    for (let inventoryItemKey in inventoryItemsObj) {
      const costOrQuantObj = inventoryItemsObj[inventoryItemKey];

      const value = costOrQuantObj.cost * costOrQuantObj.quantity;
      currentValue += value;
    }
  }
  return currentValue;
};

tacoCatInc.sale = function (orderObj) {
  let orderPrice = 0;

  for (let itemCategoryKey in orderObj) {
    const choice = orderObj[itemCategoryKey];
    orderPrice += this[itemCategoryKey][choice].cost;
    this[itemCategoryKey][choice].quantity--;
  }

  this.cash += orderPrice;

  return orderPrice;
};
