let v;

typeof v; // currently has no value, means it is not defined, a state
console.log(typeof v); // "undefined"

v = 2;
typeof v;
console.log(v); // "number"

v = "2";
typeof v;
console.log(v); // "string"

v = true;
typeof v;
console.log(v); // "boolean"

v = {};
typeof v;
console.log(v); // "object"

v = Symbol();
typeof v;
console.log(v); // "symbol"

// note
// typeof will return a string, it can not return undefined

const str = "hello world";

if (!typeof str == undefined) {
} // type coercion
if (!typeof str == "undefined") {
} // right way of comparing
