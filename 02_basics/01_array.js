const myArr = [1,2,3,4,5]
// console.log(myArr)
// myArr.push(6)
// console.log(myArr.includes(9))

const newArr = myArr.join()
// console.log(typeof newArr)


// slice, splice
const myn1 = myArr.slice(1, 3) //Slice prints the elements in the range specified to it.
console.log(myn1)
console.log("A", myArr)

const myn2 = myArr.splice(1,3) //Splice removes those elements from original array. It manipulates the original array.
console.log(myn2)
console.log("B", myArr)