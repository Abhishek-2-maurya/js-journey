const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

console.log(0n === -0n);// true
console.log(0n == -0n);
console.log(+0 === -0);
console.log(-0 === +0);
console.log("2" > 1); //true
console.log("02" > 1); //true

console.log( null > 0);//false
console.log( null == 0);//false
console.log( null >= 0);//true



