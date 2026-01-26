const accountID = 12345;
//countID = 67890; // This will throw an error because accountID is a constant

let userName = "Guest";
var password = "password123";
accountCity = "varanasi"; // Implicit global variable

userName = "Admin"; // Reassigning a new value to userName
password = "admin456"; // Reassigning a new value to password

let accountState;

console.table([accountID, userName, password, accountCity, accountState]);


// let and const ==> their is reserved space for them

// console.log(a); //---> ReferenceError: Cannot access 'a' before initialization
let a = 100;
// let a = 1000; //---> SyntaxError: Identifier 'a' has already been declared


// const b;    //---> SyntaxError: Missing initializer in const declaration
const c = 10;
// c = 1000;   //---> TypeError: Assignment to constant variable.
