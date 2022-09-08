abstract class Shape{
  constructor(public name: string){}

  abstract render(): void;
}

class Circle extends Shape{
  render(): void {
      console.log("Rendering a circle");
  }
}

let circle = new Circle("circle1");

console.log(circle);
circle.render();