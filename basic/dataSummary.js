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