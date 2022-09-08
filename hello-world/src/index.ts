class Account {
  number?: number // optional property

  constructor(
    public readonly id: number,  
    public owner: string, 
    private _balance: number,
  ) { 

  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  get balance(): number{
    if(this.owner !== "admin")
      return this._balance;
    return -1;
  }

  set balance(value: number){
    if(this.owner !== "admin"){
      this._balance = value;
    }
  }
}

let account = new Account(1, "Sathya", 0);
account.deposit(100);

console.log(account.balance);
account.balance++;
console.log(account.balance);