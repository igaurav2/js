getName();

// setName();   // TypeError: setName is not a function 
// resetName();   // act same as setName


console.log(x);   // result : undefined
                  // if x is not defined in the code then => ReferenceError: x is not defined

console.log(getName); // output the function => [Function: getName]

var x = 7;
function getName(){
    console.log("Gaurav");
}

// getName();
// console.log(x);
// console.log(getName);


var setName = () => {
    console.log("Rishabh");
}

var resetName = function(){
    console.log("Souvik");
}

/* temporalDeadZone ==> phase from hoisting till it assign some value
       |
       |--> console.log(c);  // ReferenceError: Cannot access 'c' before initialization
            let c = 8;
*/