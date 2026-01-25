const accountID = 12345;
//countID = 67890; // This will throw an error because accountID is a constant

let userName = "Guest";
var password = "password123";
accountCity = "varanasi"; // Implicit global variable

userName = "Admin"; // Reassigning a new value to userName
password = "admin456"; // Reassigning a new value to password

let accountState;

console.table([accountID, userName, password, accountCity, accountState]);