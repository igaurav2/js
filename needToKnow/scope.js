// scope ==> where you can access a specific variable or fuction in code

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