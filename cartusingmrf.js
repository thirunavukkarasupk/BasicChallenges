var rates = {
    Carrot: 10,
    Apple: 200,
    Guava: 50,
  };
  
  var discounts = {
    // values are in percentages.
    Apple: 10,
  };
  
  var taxes = {
    // values are in percentages.
    Carrot: 5,
    Guava: 10,
  };
  
  var purchases = [
    {
      item: 'Carrot',
      units: 20,
    },
    {
      item: 'Apple',
      units: 2,
    },
    {
      item: 'Guava',
      units: 1,
    },
  ];
  var getDiscountPercent = productName => discounts.hasOwnProperty(productName) ? discounts[productName] : 0;
  var getTaxPercent = productName => taxes.hasOwnProperty(productName) ? taxes[productName] : 0;
  var getUnitPrice = itemName => rates.hasOwnProperty(itemName) ? rates[itemName] : 0;
  var getLineItemPrice =  purchases => (getUnitPrice(purchases.item)*purchases.units) - ((getUnitPrice(purchases.item)*purchases.units)*(getDiscountPercent(purchases.item)/100)) + ((getUnitPrice(purchases.item)*purchases.units)*(getTaxPercent(purchases.item)/100));
  var getSum = () => purchases.map(getLineItemPrice).reduce((totalPrice,currentElementPrice) =>totalPrice+currentElementPrice,0);   

  var main = function main() {
    console.log(getSum());
  }
  
  main();
