let speed: number | null = null;

let ride = {
  // Falsy (undefined, null, '', false, 0)
  //speed: speed || 30 // here if speed is 0, then speed property will be set to 30.
  // Nullish coalescing operator
  speed: speed ?? 30
}