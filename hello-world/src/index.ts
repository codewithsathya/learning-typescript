function calculateTax(income: number): number | string{
  if(income === 2){
    return "low"
  }
  return 2 * income;
}