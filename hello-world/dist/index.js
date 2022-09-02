"use strict";
function calculateTax(income, taxYear) {
    if (taxYear === undefined) {
        return income * 1.2;
    }
    if (taxYear < 2022) {
        return income * 1.5;
    }
    return income * 1.3;
}
console.log(calculateTax(10000));
//# sourceMappingURL=index.js.map