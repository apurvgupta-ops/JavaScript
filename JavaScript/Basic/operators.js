var sellingPrice = 199;
var listingPrice = 799;

var discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(typeof discount);
var fixOff = Math.round(discount);
console.log(fixOff);
