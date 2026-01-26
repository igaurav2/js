"use strict"; // treat all JS code as modern JS


// alert(3 + 4); // we are using nodejs, not browser

// null; // empty value


//----undefined vs not defined

// undefined ==> value is not assigned
                 // Output
let a;
console.log(a);  // ---> undefined

// not defined
console.log(p);  // ---> ReferenceError: p is not defined




console.log(typeof null); // object (this is a bug in JS, null is not an object)
console.log(typeof undefined);  // undefined


// js is a loosely typed language
let undef;
console.log(undef);
undef = 10;
console.log(undef);
undef = "Gaurav";
console.log(undef);