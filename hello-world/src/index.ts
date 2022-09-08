class Account{
  readonly id: number; // cannot change this
  owner: string
  private _balance: number //usually names start with _
  number?: number // optional property

  constructor(id: number, owner: string, balance: number){
    this.id = id;
    this.owner = owner;
    this._balance = balance;
  }

  deposit(amount: number): void{
    if(amount <= 0){
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  getBalance(): number{
    return this._balance;
  }

  private _calculateTax(){ // we can also set private methods

  }
}

let account = new Account(1, "Sathya", 0);
account.deposit(100);
// console.log(account._balance); // shows error
console.log(account.getBalance());
