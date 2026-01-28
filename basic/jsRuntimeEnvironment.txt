/* JavaScript Runtime Environment :
    Whenever we execute any piece of code, it needs a container which has everything required to run a piece of code code

    jsEngine is the heart of the jsRuntimeEnvironment

How code works?

code ---|
        |
    |---|-------------------------------------------------------------------------------------| JS Engine
    |   |---> parsing ---> tokens are generated then syntax tree created AST                  |
    |   |                                                                                     |
    |   |---> compilation (justInTime compilation) ---> Interpreter + Compiler                |
    |   |                                                    |                                |
    |   |                                                    |--->Bytecode                    |
    |   |                                                                                     |
    |   |---> execution ---> with the help of memoryHead and callStack                        |
    |-----------------------------------------------------------------------------------------|



*/