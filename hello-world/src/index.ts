class SeatAssignment {
  //Index signature property;
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.m1= "hi";
seats["m2"] = "Hello";
seats[9] = "eh";

console.log(seats);