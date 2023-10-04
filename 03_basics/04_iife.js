//Immediately invoked function expression
//This is used because sometimes we can have problem with Global scope pollution (Global Scope variables, declarations etc.).

(function chai(){
    //Named IIFE (function name is given)
    console.log("DB Connected");
})(); //Add semicolon explicitly here to end this function and run another function.

//Always 2 IIFE is separated by semi-colon.

((name) => {
    //Unnamed IIFE (no function name)
    console.log(`DB 2 ${name}`);
})("Suraj")