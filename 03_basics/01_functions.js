function logInUser(username){
    if(!username)
    {
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(logInUser("Suraj"))
console.log(logInUser())