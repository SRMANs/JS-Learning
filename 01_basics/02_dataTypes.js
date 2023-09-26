//Data Types
//number
//bigint
//string => ""
//boolean
//null
//undefined
//symbol

// console.log(typeof undefined)
// console.log(typeof null) //null is an object type
// console.log(typeof string)
// console.log(typeof number)

//Primitive Data Types: Direct reference to memory is not allocated to these. We get a copy of variables associated with thses data types. 
//string, number, boolean, null, undefined (defined a variable, memory is allocated to it but you have not assigned any value yet), symbol, bigint

//Reference (Non Primitive)
//Array, Objects, Functions

const id = Symbol("123");
const bigNumber = 54536873465866359863n;
const score = 873;
const scoreVal = 100.35
const temp = null;
let a;
const arr = ["suraj",'ranjan','rajiv']

console.log(typeof bigNumber);
console.log(typeof a);
console.log(typeof temp);
console.log(typeof scoreVal);
console.log(typeof score);
console.log(typeof id);
console.log(typeof arr);