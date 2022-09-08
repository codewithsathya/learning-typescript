"use strict";
class Account {
    constructor(id, owner, _balance) {
        this.id = id;
        this.owner = owner;
        this._balance = _balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error("Invalid amount");
        }
        this._balance += amount;
    }
    get balance() {
        if (this.owner !== "admin")
            return this._balance;
        return -1;
    }
    set balance(value) {
        if (this.owner !== "admin") {
            this._balance = value;
        }
    }
}
let account = new Account(1, "Sathya", 0);
account.deposit(100);
console.log(account.balance);
account.balance++;
console.log(account.balance);
//# sourceMappingURL=index.js.map