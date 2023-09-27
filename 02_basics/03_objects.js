//Object Literals
const mySym = Symbol("key1")

const user = {
    name:'Suraj', //JS treats key as "name" but it's not necessary to write it like this
    "full name" : 'Suraj Ranjan', 
    age: 23,
    [mySym]: "myKey1", //[mySym] this is the correct syntax for adding any symbol *****(Difference between symbol key and simple string)*****
    location: 'Bengaluru',
}

// console.log(user.name);
// console.log(user['name']); //Both ways object value can be accessed  but in some special cases it becomes must to acess using [] (square brackets).
// console.log(user['full name']);
// console.log(typeof [mySym]); //Object
// console.log(typeof user[mySym]); //String

user.age = 22;
// console.log(user.age);
// Object.freeze(user) //It freezes the object and cannot be changed further
user.age = 23;
// console.log(user);

user.greet = function(){
    console.log("Hello User");
}

user.greet1 = function(){
    console.log(`Hello User ${this.name}`);
}


console.log(user.greet()); //It will give error if object is freezed at any given point
console.log(user.greet);
console.log(user.greet1())
