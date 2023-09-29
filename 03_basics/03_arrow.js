// this keyword refers to current context

const user = {
    username :"Suraj",
    price : 299,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  //if we don't give this output is username not defined
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "Ranjan"
// user.welcomeMessage()
console.log(this);

function chai(){
    console.log(this);
}
chai()