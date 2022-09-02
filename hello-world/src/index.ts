let employee: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => number;
} = {
  id: 1,
  name: "Sathya",
  retire: (date) => date.getTime()
};
