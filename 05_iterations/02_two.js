//for of looping
const arr = [1,2,3,4,5]
for (const index of arr){
    // console.log(index); //for of loop is printing elements of the array
}

//**********************************************************************************************************************//

//Maps
const map = new Map()
map.set("IN", "India")
map.set("Fr", "France")
map.set("IT", "Italy")
map.set("IN", "India")
// console.log(map);
//Map maintains order in which we have inserted elements. Also it only take unique values. It takes India only once.
//Looping in map
for(const key of map){
    // console.log(key); //array printing
}
for(const [key, value] of map){
    // console.log(key + " :- " + value); //destructuring array (key and value is printed individually)
}

//**********************************************************************************************************************//

//Looping in Objects
const myObject = {
    game1: "NFS",
    game2: "IGI"
}
for(const [key, value] of myObject){
    console.log(key + " :- " + value); //Output:- myObject is not iterable.
}
