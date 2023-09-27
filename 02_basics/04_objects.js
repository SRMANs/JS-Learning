const ruser = {
    email:'suraj@gmail.com',
    fullname:{
        firstname :'Suraj',
        lastname:'Ranjan'
    }
}
console.log(ruser.fullname?.firstname); //While fetching data from API we often use '?' which means if fullname exists fetch firstname from it.


//****************** Different ways of assigning Objects *******************

const obj1={1:'a', 2:'b'}
const obj2={3:'a', 4:'b'}
// const obj3 = {obj1, obj2}
const obj3 = Object.assign(obj1, obj2) //Either give {} in start after assign or can avoid it. First place is the target place, so can give empty object {} as target.
// console.log(obj3);
// console.log(obj1===obj3) //true in case Object.assign(obj1, obj2) and false in case Object.assign({}, obj1, obj2)

const obj4 = {...obj1, ...obj2}
// console.log(obj4);

const users = [
    {
        id:1,
        email:"suraj@gmail.com"
    },
    {
        id:2,
        email:"ranjan@gmail.com"
    },
    {
        id:3,
        email:"harsh@gmail.com"
    }, 
    {
        id:4,
        email:"shubham@gmail.com"
    }
]

// console.log(users[1].email)
// console.log(Object.keys(obj4))
// console.log(Object.values(obj4))
// console.log(Object.entries(obj4))


//********************** OBJECT DESTRUCTURING **********************
const course = {
    courseName: "JavaScript",
    price: "999",
    instructor: "Hitesh"
}

console.log(course.instructor); //Instead of writing like this, use destructuring

const {instructor: i} = course   //Destructuring
console.log(i);