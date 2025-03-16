const myNumber = new Number(123.67384);
console.log(myNumber);

/*
constructor: ƒ Number()
toExponential: ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString: ƒ toLocaleString()
toPrecision: ƒ toPrecision()
toString: ƒ toString()
valueOf: ƒ valueOf()
*/
//toExponential: ƒ toExponential()
console.log(myNumber.toExponential(2));
// toFixed: ƒ toFixed()
const myNumber2 = new Number(123.67384);
console.log(myNumber2.toFixed(2))
// toLocalString()
const number3 = new Number(123.27384)
console.log(number3.toLocaleString("en-IN"));
//toPrecision()
console.log("precision");
console.log(number3.toPrecision(3))

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//Math
const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min + 1)+min));

