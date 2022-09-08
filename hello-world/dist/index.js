"use strict";
class Shape {
    constructor(name) {
        this.name = name;
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
//# sourceMappingURL=index.js.map