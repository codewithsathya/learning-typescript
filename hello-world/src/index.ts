class Account{
  readonly id: number; // cannot change this
  owner: string
  private _balance: number
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
}

let account = new Account(1, "Sathya", 0);
account.deposit(100);
// console.log(account._balance); // shows error
console.log(account.getBalance());
