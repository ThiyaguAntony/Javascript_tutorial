/* 
String
Number   eg:  1.25,25
Boolean  eg:  True,False
Null
Undefinded 
Symbols  E6

Array
Object Literals
Date 
*/

// 1. Primitive Data Types
var name = "Thiyagu";  console.log(name);
var age = 29; console.log(age);
var ismarried = true; console.log(ismarried);
var phone = null; console.log(phone);
let DOB; console.log(DOB);

const a1 = Symbol("a");
console.log(a1);

// 2. Non-primitive Data Types

var person = {name : "Thiyagu", emp_id:"EID0001"}; console.log(person);
let arr = [1,2,3,4,5,6]; console.log(arr);
var sum = (a,b) => { return a+b; }; console.log(sum(12,13));
var startdate = new Date(); console.log(startdate);

// 3. Special Cases

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript bug)
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof {}); // "object"
console.log(typeof []); // "object"
console.log(typeof function() {}); // "function"
