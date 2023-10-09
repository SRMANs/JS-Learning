//for each loop
const coding = ["JS", "C++", "Java", "Python"]

coding.forEach( function(val) {
    // console.log(val);
} )

coding.forEach( (items) => {
    // console.log(items);
} )

function printMe(item){
    // console.log(item);
}
coding.forEach(printMe)

//Can have more than 1 parameters also
coding.forEach( (items, index, arr) => {
    // console.log(items, index, arr);
} )

const myCoding = [
    {
        languageName : "JavaScript",
        fileName : "js"
    },
    {
        languageName : "Java",
        fileName : "java"
    },
    {
        languageName : "Python",
        fileName : "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.languageName);
})