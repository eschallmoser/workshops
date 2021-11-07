const payload = {
  transactions: [
    {
      transactionID: 1,
      amount: 135.21,
      type: "groceries",
      isDeposit: false,
    },
    {
      transactionID: 2,
      amount: 2435.02,
      type: "paycheck",
      isDeposit: true,
    },
    {
      transactionID: 3,
      amount: 970,
      type: "rent",
      isDeposit: false,
    },
  ],
};

//define a function makeBankBalance that accepts an object
//when invoked, function should console log all transactions "TransactionID: 1 - Type: groceries - Amount: $135.21"
// if not a deposit, should be negative
//last console log should provide bank balance: "Available Balance: "

const makeBankBalance = (payloadObj) => {
  const transArr = payloadObj["transactions"];
  let balance = 0;

  for (let i = 0; i < transArr.length; i++) {
    let newAmount = transArr[i].amount;
    let newAmountStr = `$${newAmount}`;
    if (!transArr[i].isDeposit) {
      newAmount = -Math.abs(newAmount);
      newAmountStr = `-${newAmountStr}`;
    }
    balance += newAmount;
    console.log(
      `TransactionId: ${transArr[i].transactionID} - Type: ${transArr[i].type} - Amount: ${newAmountStr}`
    );
  }

  console.log(`Available Balance: $${balance}`);
};

makeBankBalance(payload);
