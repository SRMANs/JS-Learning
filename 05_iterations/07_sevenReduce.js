const myNums = [1,2,3,4,5,6,7,8,9,10]

const newArr = myNums.reduce((acc, currVal) => acc+currVal, 0) //arrow function
console.log(newArr);

const newArr1 = myNums.reduce(function(acc, currVal) { //need to write completely function and no other name
    return acc + currVal
}, 5)
console.log(newArr1);

const shoppingCart = [
    {
        course: 'JavaScript',
        price: 2999
    },
    {
        course: 'Python',
        price: 999
    },
    {
        course: 'React',
        price: 3999
    }
]

const totalPrice = shoppingCart.reduce((acc, item) => acc+item.price, 0)
console.log(totalPrice);