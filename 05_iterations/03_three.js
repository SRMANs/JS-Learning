//for in loop
const myObject = {
    js: "JavaScript",
    cpp: "C++",
    ts: "TypeScript"
}

for (const key in myObject) {
    // console.log(myObject[key]);
    console.log(`${key} shortcut is for ${myObject[key]}`);
}

const arr = [1,2,3,4,5]
for (const index in arr){
    // console.log(index); //for in loop is printing index values of the elements
    console.log(arr[index]);
}