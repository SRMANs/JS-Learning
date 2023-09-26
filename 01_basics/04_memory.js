//Stack Memory(Primitive Data Types) and Heap Memory(Non Primitive Data Types)

let name = "Suraj";
let changeName = name;
console.log(changeName);
changeName = "Ranjan";
console.log(name);
console.log(changeName);
//Here (in above case) we get a copy of name in changeName, so changes made in changeName is not reflected in name and name remains as it is.

//But in below case we get reference of userOne in userTwo, so changes made in one is reflected in both.
let userOne = {
    email :"suraj@gmail.com",
    name:"suraj"
}

let userTwo = userOne;

userTwo.email = "ranjan@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);
userOne.email = "surya@gmail.com";
console.log(userOne.email);
console.log(userTwo.email);