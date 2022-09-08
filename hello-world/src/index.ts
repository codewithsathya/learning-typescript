class Person{
  constructor(public firstName: string, public lastName: string){}

  get fullName(){
    return this.firstName + " " + this.lastName;
  }

  walk(){
    console.log("Walking");
  }
}

class Teacher extends Person{
  override get fullName(){
    return "Professor " + super.fullName;
  }
}

function printNames(people: Person[]){
  for(let person of people){
    console.log(person.fullName);
  }
}

printNames([
  new Person("John", "Smith"),
  new Teacher("Ram", "Kumar")
])

let teacher = new Teacher("John", "Smith");

// console.log(teacher.fullName);