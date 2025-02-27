/* 
Strings to Numbers
Numbers to Strings
Dates to Numbers
Numbers to Dates
Boolean to Numbers
Numbers to Boolean 
*/

let a;

a="30"; console.log(a,typeof a);
a = Number(a); console.log(a,typeof a);

a="52.5"; console.log(a, typeof a);
a = Number(a); console.log(a,typeof a);

a = "true"; console.log(a, typeof a);
a = Boolean(a); console.log(a, typeof a);

var b;

b = 20; console.log(b, typeof b);
b = b.toString(); console.log(b, typeof b);

b = 51.5; console.log(b, typeof b);
b = parseInt(b); console.log(b, typeof b);

b = "5.12"; console.log(b, typeof b);
b = parseFloat(b); console.log(b, typeof b);

var c = new Date(); console.log(c, typeof c);
c = Number(c);  console.log(c, typeof c);

c = 98745456; console.log(c, typeof c);
c = Date(c); console.log(c, typeof c);

c = [1,2,3,4,5]; console.log(c, typeof c);
c = Number(c); console.log(c, typeof c);

c = true; console.log(c, typeof c);
c = Number(c); console.log(c, typeof c);
c = String(c); console.log(c, typeof c);

c = 0; console.log(c, typeof c);
c = Boolean(c); console.log(c, typeof c);
