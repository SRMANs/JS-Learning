// const user = "sr@gmail.com";

// if(user)
//     console.log("Have a value")
// else
//     console.log("Have no value")

//Falsy Values: false, 0, -0, BigInt(0n), "" (Empty string) , NaN, null, undefined

//Truthy Values: true, 1, "0" (something written inside string), "false", " " (space), [], {}, function() {}

//Checking empty arays
const userEmail = []

if(userEmail.length===0)
    console.log("Have a value")
else
    console.log("Have no value")

//Checking Objects
const obj = {}
if(Object.keys(obj).length === 0)
    console.log("Have a value")
else
    console.log("Have no value")


//************************ NULLISH COALESCING OPERATOR ((??): null undefined )**************************
let val1;
val1 = 5 ?? 10
console.log(val1); //First value is getting printed.

let val2;
val2 = null ?? 20
console.log(val2); // Second value is getting printed.

let val3;
val3 = undefined ?? 30
console.log(val3);

let val4;
val4 = undefined ?? 50 ?? 60
console.log(val4);

//************************** TERNERY OPERATOR *******************************
//Nullish Coalescing opeartor and ternary operator are different things.
// condition ? true : false
const price = 100
price >= 80 ? console.log("Price more than 80") : console.log("Price less than 80")



