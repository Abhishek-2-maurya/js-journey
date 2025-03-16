// strings in js
/*
anchor: ƒ anchor(), at: ƒ at(), big: ƒ big(), blink: ƒ blink(), bold: ƒ bold(), charAt: ƒ charAt(),
charCodeAt: ƒ charCodeAt(), codePointAt: ƒ codePointAt(), concat: ƒ concat() constructor: ƒ String(),
endsWith: ƒ endsWith(), fixed: ƒ fixed(), fontcolor: ƒ fontcolor(), fontsiz: ƒ fontsize(), includes: ƒ includes(),
indexOf: ƒ indexOf(), isWellFormed: ƒ isWellFormed(), italics: ƒ italics(), lastIndexOf: ƒ lastIndexOf()
slice: ƒ slice(), small: ƒ small(), split: ƒ split(), replace: ƒ replace(), normalize: ƒ normalize()
sub: ƒ sub(), substr: ƒ substr(), substring: ƒ substring()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()

*/



const mystring = new String("Abhishek_Maurya");
console.log(mystring);
console.log(mystring[0]);
//length 
console.log(mystring.length);
//at() mathod

let index = 5;
let index2 = -5;
console.log(mystring.at(index));
console.log(mystring.at(index2))
//big()
console.log(mystring.big());

//charAt()
console.log(mystring.charAt(index));
//charAt does not allows the negative indexing

//charCodeAt()
for(let i = 0; i<mystring.length;i++)
{
    console.log(`${mystring[i]}:- ${mystring.charCodeAt(i)}`);
}

