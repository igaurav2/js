a();       //---> funA
// b();    //---> TypeError: b is not a function  -->---------------------------------------------------
                                                                                                      //
/*---- Phase 1                                                                                        //
    a: {....}                                                                                         //
    b: undefined                                                                                      //
*/                                                                                                    //
                                                                                                      //
function a() {                      // Function Statement aka Function Declaration                    //
    console.log("functionStatement");                                                                              //
}                                                                                                     //
// ---- Output: 10 1                                                                                  //
                                                                                                      //
var b = function(){                 // Function Expression                                            //
    console.log("functionExpression");                                                                              //
}                                                                                                     //
                                                                                                      //
b();    //---> funB <-------------------------------------------------------------------------------<---



var c = function namedfun() {       // namedFunction Expression
    console.log("namedFunction");            //    |---> can be accessed inside a function
}
// namedfun();     //---> ReferenceError: namedfun is not defined
c();    //---> funC



/*--------------  Anonymous Function ==> function without a name

    function () {}   //---> SyntaxError: Function statements require a function name
    anonymousFunctions are used when function are used as values
*/


// ------------ Parameters & Arguments
var d = function (parameter1, parameter2){   // label and indentifiers which gets those values are parameters
    console.log("parameter&Argument");
}
d("argument1", "argument2");    // arguments are values passed inside a function


// ------------- First Class Functions ==> ability to use functions as values
var e = function(){
    return function firstClass () {}
}
console.log(e());   //---> [Function: firstClass]