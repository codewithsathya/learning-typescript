class Person{
  constructor(public firstName: string, public lastName: string){}

  get fullName(){
    return this.firstName + " " + this.lastName;
  }

  private walk(){
    console.log("Walking");
  }

  protected sit(){
    console.log("sitting")
  }
}
class Teacher extends Person{
  override get fullName(){
    this.walk(); // shows error
    this.sit();
    return "Professor " + super.fullName;
  }
}