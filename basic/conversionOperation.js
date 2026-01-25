// number na ho to NaN hi result aayega
// null ho to conversion in number pr 0 hoga
// boolean conversion ==== 1 => true; 0 => false; "" => false; "dsgg" => true; 

let a = null
let b = 34
let c = "34"
let d = "34gjrg"
let e = undefined

let valueInNumberA = Number(a)
let valueInNumberB = Number(b)
let valueInNumberC = Number(c)
let valueInNumberD = Number(d)
let valueInNumberE = Number(e)

console.table([valueInNumberA, valueInNumberB, valueInNumberC, valueInNumberD, valueInNumberE])

console.log("1" + 2 + 3)
console.log(1 + 2 + "3")

// other operators are same as used before