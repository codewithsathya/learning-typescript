class Account {
  number?: number // optional property
  // readonly id: number; // cannot change this
  // owner: string
  // private _balance: number //usually names start with _

  // constructor(id: number, owner: string, balance: number){
  //   this.id = id;
  //   this.owner = owner;
  //   this._balance = balance;
  // }

  // The above code can be written as below
  constructor(
    public readonly id: number, 
    public owner: string, 
    private _balance: number,
    public phone?: number,
    public email?: string) {

  }

  deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Invalid amount");
    }
    this._balance += amount;
  }

  getBalance(): number {
    return this._balance;
  }

  private _calculateTax() { 

  }
}

let account = new Account(1, "Sathya", 0);
account.deposit(100);
console.log(account.getBalance());
