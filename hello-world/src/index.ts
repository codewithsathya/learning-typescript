function calculateTax(income: number, taxYear?: number): number{
  // if(taxYear === undefined){
  //   return income * 1.2;
  // }
  if(taxYear < 2022){ // show error here
    return income * 1.5;
  }
  return income * 1.3;
}

console.log(calculateTax(10_000));