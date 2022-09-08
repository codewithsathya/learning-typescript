"use strict";
class Shape {
    constructor(name) {
        this.name = name;
    }
    erase() {
        console.log("Erasing ", this.name);
    }
}
class Circle extends Shape {
    render() {
        console.log("Rendering a circle");
    }
}
let circle = new Circle("circle1");
console.log(circle);
circle.render();
circle.erase();
//# sourceMappingURL=index.js.map