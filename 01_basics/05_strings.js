const name = "Suraj";
const count = 5;

console.log(`Hello my name is ${name} and my repo count is ${count}.`);

//Another way to define a string

const gameName = new String("igi"); //Here we get many methods and also key value pairs. (Try this in console).

console.log(name.toUpperCase())
console.log(gameName.toUpperCase()) //This does not change your original string, as we get a copy in Primitive Data Types.
console.log(gameName)
console.log(gameName.charAt(2))
console.log(gameName.indexOf("i"))