let a = 300 //Global scope
if(true){
    let a = 10; //Block scope
    // const b = 20;
    // var c = 30;
    // console.log("inner a: ", a)
}

// console.log(a); //Output: a is not defined (it lies within it's scope)
// console.log(b); //Output: b is not defined (it lies within it's scope)
// console.log("outer a: ",a);

//**************** Nested Scope *****************

function one(){
    const username = "SURAJ" 
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}

one()


//******************** Interesting *******************

console.log(addone(5)) //Can be called before initialization
function addone(num){
    return num+1;
}
console.log(addone(5)) //Can be called after initialization


// console.log(addtwo(5))  //Cannot be called before initialization
const addtwo = function(num){
    return num+1;
}
console.log(addtwo(6));