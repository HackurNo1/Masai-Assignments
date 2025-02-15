function createBankAccount(val) {
  let amount = val;
  return {
    deposit: function (val) {
      amount += val;
      return amount;
    },
    withdraw: function (val) {
      amount -= val;
      return amount;
    },
    getBalance: function () {
      return amount;
    },
  };
}

const account = createBankAccount(100);
console.log(account.deposit(50));
console.log(account.withdraw(30));
console.log(account.getBalance());
