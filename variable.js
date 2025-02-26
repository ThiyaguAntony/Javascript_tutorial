/* 
var
let
const 
*/

var a = "Antony";
let b = 25;
const c = 30;

console.log(a);
console.log(b);
console.log(c);

// 1. Variable Scope

// 1.1 Global Scope

var name = "Thiyagu";

console.log(name);

// 1.2 Function Scope

var emp_id = () => {
  let emp = {name : "Thiyagu", emp_id : "EID0001"}; 
  return emp.emp_id;
}
console.log(emp_id());

// 1.3 Block Scope

var a1 = 10;
if(a1> 5)
{
    a1 = 100;

    let b1 = 20;
    console.log(b1);

    const c1 = 30;
    console.log(c1);
}


console.log(a1);

//(let & const): Variables declared within {} cannot be accessed outside.

/* 
console.log(b1);
console.log(c1);
 */

// ----------------------------------------------------------------

// 2. Variable Redeclaration

var a2 = 60;
console.log(a2);

var a2 = 90;
console.log(a2);

let b2 = 60;
console.log(b2);

// let cannot be Redeclared.
/* let b2 = 90;
console.log(a2); */

const c2 = 60;
console.log(c2);

// const cannot be Redeclared.
/* const a4 = 90;
console.log(a4); */

// ----------------------------------------------------------------

// 3. Value assignment

var a3 = 50;
console.log(a3);

a3=40;
console.log(a3);

let b3 = 20;
console.log(b3);

b3=30;
console.log(b3);

const c3 = 20;
console.log(c3);

// const cannot be Reassigned.
/* 
c3=30;
console.log(c3); 
*/

// 4. Hoisting

console.log(a4);
var a4 = 1000;

//let and const are hoisted but NOT initialized (accessing them before declaration gives a ReferenceError).
/* 
console.log(b4);
let b4 = 1000;

console.log(c4);
const c4 = 1000; 
*/