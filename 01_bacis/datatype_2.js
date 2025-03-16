/*in javascript there are two type of datatype 
1. Primative 7 types (string, number, boolen, bigint, null, undifined,symbol)
1. Non-primative(reference type) array, object, function */


const rollNo = 1234;//number
let amount = 1213.65;//Number

const nameis = "abhishek";//string

const booltrue = true;//boolian

let id = Symbol("1234");
let newid = Symbol("1234");

console.log(id === newid);//false symbol is always a unique although the value is same;


///array

let frinds = ["abhishek","Annu","beta","gudda"];

let myObj = {
    name: "abhishek",
    rollNo: 1075,
}
 let greed=function(){
    console.log("hello sir good morning");
 }
greed();
 console.table([typeof (frinds),frinds,typeof (myObj),myObj,typeof greed,greed()]);