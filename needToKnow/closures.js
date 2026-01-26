//------ Closure ==> funtion along with its lexicalScope bundle
function x(){                                       // Closure(x) ==> a: 10
    let a = 10;
    function y(){                                   // Closure(y) ==> b: 100
        var b = 100;
        function z(){
            console.log(a, b);
        }
        z();
        // let d = 2;   ---> throws an error if we try to access in z
        return z;    // not only fuction code was returned but closure was returned
    }
    y();
    return y;
}
var store = x();         // 10 100
console.log(store);      // [Function: y]
console.log(store());    // 10 100 [Function: z]

// ---- more on closures
function counter(){
    var count =0;
    return function inC(){
        count++;
        console.log(count);
    }
}

var counter1 = counter();
counter1(); //---> 1
counter1(); //---> 2
counter1(); //---> 3

var counter2 = counter();
counter2(); //---> 1



// ----------- setTimeOut ==> takes callback function (which had formed a closure) and attaches timer
//                            once the timeout end, it push that function again into the call stack
function newf() {
    for(let i=1; i<3; ++i){
        setTimeout( function() {console.log( i)}, i*10);  // js doesn't wait, so first Gaurav then 1 2
    }

    for(var i=1; i<3; ++i){
        setTimeout( function() {console.log( i)}, i*100); //---> 3 3 will be printed as all var i points to the same location
    }

    for(var i=1; i<3; ++i){
        function close(j){
            setTimeout( function() {console.log( j)}, j*1000); // work same as let as we have created new copy of i everytime
        }
        close(i); // here new copy is created everytime setTimeOut was called
    }
    
    console.log("Gaurav");
}
newf();