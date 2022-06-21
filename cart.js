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

/* Functions */
var getDiscountPercent = function (productName) {
	if(!discounts.hasOwnProperty(productName))
		return 0;
	return discounts[productName];
  
};

var getTaxPercent = function (productName) {
	if(!taxes.hasOwnProperty(productName))
		return 0;
	return taxes[productName];
 
};
var getUnitPrice = function (itemName) {
	if(!rates.hasOwnProperty(itemName))
		return 0;
	return rates[itemName];
  
};

var getLineItemPrice = function (lineItem) {
	let lineItemPrices=[];
	for(let i=0; i<lineItem.length; i++){
		let beforeDAndT=getUnitPrice(lineItem[i].item)*lineItem[i].units;
		let discountCal =beforeDAndT*(getDiscountPercent(lineItem[i].item)/100);
		let taxCal=(beforeDAndT-discountCal)*(getTaxPercent(lineItem[i].item)/100)
		let totalPrice=beforeDAndT-discountCal+taxCal;
		lineItemPrices.push({"item": lineItem[i].item, "price": totalPrice});
	}
	return lineItemPrices;
  
};

var getSum = function () {
	let finalPriceArr=getLineItemPrice(purchases);
	let finalPrice=0;
	for(let i=0;i<finalPriceArr.length; i++)
	{
		 finalPrice+=finalPriceArr[i].price;
	}
	return finalPrice;
  
};

// Do not change below this line.
/* Main Function */
var main = function main() {
  console.log(getSum());
}

main();
