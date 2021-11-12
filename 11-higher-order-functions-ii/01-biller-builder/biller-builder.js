// YOUR CODE BELOW

const billerBuilder = (aState) => {
  let finalPrice = 0;
  let shipping;
  let salesTax;

  return function (price) {
    if (aState === "NY") {
      shipping = 1.03;
      salesTax = 1.04;
    }
    if (aState === "NJ") {
      shipping = 1.05;
      salesTax = 1.06625;
    }

    finalPrice = price * shipping * salesTax;

    return finalPrice;
  };
};
