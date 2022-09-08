type Customer = {
  birthday: Date | null
}

function getCustomer(id: number): Customer | null{
  return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(0);
// Optional property access operator
let time = customer?.birthday?.getTime();



let customers: number[] | null;
if(Date.now() > 10010010){
  customers = null
}else{
  customers = [];
}

//Optional element access operator
console.log(customers?.[0]);

let log: any = null;
log(); // doesn't show error & shows undefined when we run this

//Optional call access operator
log?.();