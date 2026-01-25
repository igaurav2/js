// primitive : call by value
// -- String, Number, Boolean, null, undefined, Symbol, BidInt(large int values)

// reference or non premitive : memory me referece allocate kr skte hai
// Array, Objects, Function

const arr = [1, 2, 3, 4]

let myObj = {
    name: "Gaurav",
    age: 24,
}

const myFunction = function(){
    console.log("Function")
}

console.table([typeof myFunction, typeof myObj, typeof arr, typeof null])


// Stack and Heap

// ---- stack memory is allocated for primitive dataType
let priName = "Gaurav"
let anotherName = priName
anotherName = "Aditya"

console.log(priName)
console.log(anotherName)

// ---- heap memory is allocated for non primitive or reference dataType
let userOne = {
    email: "g@gmail.com",
    upi: "g@ybl"
}

let userTwo = userOne
userTwo.email = "a@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)