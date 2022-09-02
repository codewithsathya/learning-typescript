let employee: {
  readonly id: number;
  name: string;
  age?: number;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Sathya",
  retire: (date) => date.getTime()
};
