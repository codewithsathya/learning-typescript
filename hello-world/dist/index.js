"use strict";
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    walk() {
        console.log("Walking");
    }
}
class Teacher extends Person {
    get fullName() {
        return "Professor " + super.fullName;
    }
}
function printNames(people) {
    for (let person of people) {
        console.log(person.fullName);
    }
}
printNames([
    new Person("John", "Smith"),
    new Teacher("Ram", "Kumar")
]);
let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
//# sourceMappingURL=index.js.map