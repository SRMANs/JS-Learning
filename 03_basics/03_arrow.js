// this keyword refers to current context

const user = {
    username :"Suraj",
    price : 299,

    welcomeMessage: function(){
        // console.log(`${this.username}, welcome to website`);  //if we don't give this, output is username not defined
        // console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Ranjan"
// user.welcomeMessage()
// console.log(this);

function chai(){
    // console.log(this);
}
chai()

//****************************************************************************************

// const addTwo = (num1, num2) => {
//     return num1+num2 //In explicit return(when parentheses is opened) we use return keyword
// }

const addTwo = (num1, num2) => num1+num2 //This implicitly returns sum. No need to write the return keyword. We can wrap (num1+num2) in parentheses.
//Do not use curly braces in place of parentheses else will have to use return keyword. 
console.log(addTwo(3, 4));

const addTo = (num1, num2) => ({userName: 'Suraj'})  //Objects need to be written in parentheses.
console.log(addTo(3, 4));
