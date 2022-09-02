type Employee = {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
}

let employee: Employee = {
  id: 1,
  name: "Sathya",
  retire: (date) => date.getTime()
};
