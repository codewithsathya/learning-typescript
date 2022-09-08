"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Circle = exports.Shape = void 0;
class Shape {
    draw() {
        console.log("Drawing shape");
    }
    ;
}
exports.Shape = Shape;
class Circle extends Shape {
    draw() {
        console.log("Drawing circle");
    }
}
exports.Circle = Circle;
//# sourceMappingURL=Shapes.js.map