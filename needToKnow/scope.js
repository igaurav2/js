/* ------ Block ==> that combines multiple js statement into one group
    we group multiple statement together in a block so that we can use it where js espect one statement
    if(true) oneStatement;
                |
                |---> {...." CompoundStatement"....}

*/

// ------ Scope ==> where you can access a specific variable or fuction in code

function gec1(){
    let isDef = 10;

    function gec2(){
        // isDef = 20;                    When "isDef = 20" => Output
        console.log(isDef);               // --> 20
    }
    
    console.log(isDef);                   // --> 10
    gec2();
    console.log(isDef);                   // --> 20
}

gec1();
console.log(isDef);

/*  whenever a executionContext is created a lexicalEnvironment is also created
    lexicalEnvironment ==> localMemory + reference to lexicalEnvironment of its parent
here gec2 lexE = gec2 localMemomry + gec1 lexE (lexicalParent)
                                        |
                                        |---> gec1 localMemory + globalExecutionContext lexE
                                                                            |
                                                                            |---> globalExecutionContext localMemory + gEC lexE
                                                                                                                        |
                                                                                                                        |---> null


    This is considered as the scopeChain
*/


/* ------------ Shadowing
    var a = 100;  // ==> var is a function scope
    let b = 100;
    {
        // var b = 4;  //---> SyntaxError: Identifier 'b' has already been declared
        var a = 10;
        let b = 10;
        console.log(a)  //---> 10
        console.log(b)  //---> 10
    }
    console.log(a)  //---> 10
    console.log(b)  //---> 100

// */