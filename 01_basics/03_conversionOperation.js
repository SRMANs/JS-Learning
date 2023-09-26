let score = "33abc";
let value = undefined;
let valInNo = Number(score)
let val = Number(value)

// console.log(typeof score)
// console.log(typeof valInNo)
// console.log(score)
// console.log(valInNo) //gets converted into a number but displays NaN.
// console.log(value)
// console.log(typeof val)
// console.log(val)

//"33"=>33
//"33abc" => NaN
//true=>1; false=>0
//"" => false; "hsjdvfj" => true
//1 => true; 0 => false


//************************ OPERATIONS ***********************

console.log(+true);
console.log(+"")


//************************* COMPARISON *********************** 
//=== strict check (It also checks the data type of variable )
console.log("2" === 2)
console.log("2" == 2)