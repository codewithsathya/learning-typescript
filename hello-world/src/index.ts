class Account{
  readonly id: number; // cannot change this
  owner: string
  balance: number
  number?: number // optional property

  constructor(id: number, owner: string, balance: number){
    this.id = id;
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount: number): void{
    if(amount <= 0){
      throw new Error("Invalid amount");
    }
    this.balance += amount;
  }
}

let account = new Account(1, "Sathya", 0);
account.deposit(100);
account.id = 10; // shows error
console.log(account);
