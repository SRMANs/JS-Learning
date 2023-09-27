const marvel_heroes = ['Thor', 'Iron Man', 'Hulk', 'Captain America'];
const dc_heroes = ['Superman', 'Batman', 'Wonder woman']

 
// console.log(marvel_heroes.push(dc_heroes)) //Creates array inside array
// console.log(marvel_heroes.concat(dc_heroes)) //Adds all data of dc into marvel

const all_heroes = [...marvel_heroes, ...dc_heroes] //Spread operator (...)
// console.log(all_heroes);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]] //To handle nested array
const arr = another_arr.flat(Infinity)
// console.log(arr)

console.log(Array.from(12345678)) //It it cannot make an array out of something it returns  an empty array

let a = 12;
let b = 33;
let c = 43;
console.log(Array.of(a,b,c))