let myDate = new Date();

// console.log(typeof myDate)

// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toTimeString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())

// let myCreatedDate = new Date(2023, 0, 23, 10)

let myCreatedDate = new Date("09-27-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date();
// console.log(newDate)
// console.log(newDate.getMonth()+1)
// console.log(newDate.getHours())

console.log(newDate.toLocaleString('default',{
    weekday:"long"
}))
