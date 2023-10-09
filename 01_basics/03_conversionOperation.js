let score = "33abc";
let value = undefined;
let valInNo = Number(score)
let val = Number(value)

console.log(typeof score) //string
console.log(typeof valInNo) //number
console.log(score) //33abc
console.log(valInNo) //gets converted into a number but displays NaN.
console.log(value) //undefined
console.log(typeof val) //number
console.log(val) //NaN

//"33"=>33
//"33abc" => NaN
//true=>1; false=>0
//"" => false; "hsjdvfj" => true
//1 => true; 0 => false


//*********************************** OPERATIONS ***********************************

console.log(+true);
console.log(+"")


//*********************************** COMPARISON ***********************************
//=== strict check (It also checks the data type of variable )
console.log("2" === 2)
console.log("2" == 2)