//JAVASCRIPT EXECUTION CONTEXT

//1. Global Execution Context (this keyword)
//2. Function Execution Context
//3. Eval Execution Context

//It executes in two phase
//1. {} Memory Creation Phase
//2. Execution Phase

let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = addNum(6, 3);
console.log(result1);
console.log(result2);

//Phase - 1.  Global Execution (this)

//Phase - 2.  Memory Creation
// val1 -> undefined, val2 -> undefined, addNum -> defination, result1 -> undefined, result2 -> undefined

//Phase - 3.  Execution Phase
//val1 <- 10, val2 <- 5, addNum -> *********(New variable environment + Execution thread)*********imp.

// For addNum function again Global Execution context i.e. Memory phase and Execution phase will be created.
//Memory Phase: val1 -> undefined, val2 -> undefined, total -> undefined 
//Execution Phase: nnum1 -> 10, num2 -> 5, total -> 15 [From here total gets returned to global executional context]
//After that this addNum's function Global execution context gets deleted and we return to the previous execution context.

//Phase - 3.  Execution Phase continued:
//result1 = 15
//Again for result2 Global Exe. context will be created as before and things repeat.

//How things go in call stack and popped out once completed.


