export class Shape{
  draw(){
    console.log("Drawing shape");
  };
}

export class Circle extends Shape{
  override draw(): void {
      console.log("Drawing circle");
  }
}