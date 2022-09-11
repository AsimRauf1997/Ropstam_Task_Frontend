export const taxCalculation = (price, tax) => {
  const calculatedTax = parseFloat((price * tax) / 100);
  return Math.round(calculatedTax);
};
export const unitPriceCalculation = (price, tax) => {
  const calculatedprice = parseFloat(price / (1 + tax / 100));
  return Math.round(calculatedprice);
};
export const unitTaxCalculation = (price, tax) => {
  const calculatedprice = unitPriceCalculation(price, tax);
  const calculatedTax = taxCalculation(calculatedprice, tax);
  return Math.round(calculatedTax);
};
