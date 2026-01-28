// Promise ==> object that represents eventual completion or failure of asynchronous operation

const cart = ["shoes", "pants", "kertas"];
/*
createOrder(cart, function (orderId) {
    proceedToPayment(orderId);
});
                           ------------------------ issue is inversionOfControl
    

const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
});

*/

/*
const gitApi = "https://github.com/igaurav2";

const userAcc = fetch(gitApi);

userAcc.then( function (data) {
    console.log (data);
});

console.log(userAcc);   //---> Promise { <pending> } 
                        //---> Response {....}

fetch(gitApi)
    .then(data => console.log(data));   //---> Response {....}
*/


//-------------------- How promise is created?
function createOrder(cart){
    const pro = new Promise(function(resolve, reject){         // way to create promise
        // if(true) reject("cart is empty");                      // reject
        setTimeout(function() {
            const orderId = "12345";
            resolve(orderId);                                  // resolve
        }, 5000);
    });
    return pro;
}

function proceedToPayment(orderId){
    return new Promise(function(resolve, reject){
        resolve("paymentSuccessful");
    });
}

createOrder(cart)
    .then(orderId => console.log(orderId))
    .then(orderId => proceedToPayment(orderId))
    .then(paymentInfo => console.log(paymentInfo))
    .catch(function(err){                                          // if rejected
        console.log(err);
    });


// --------------- Promise Api

const p1 = new Promise((resolve, reject) => {setTimeout(()=> resolve("P1 success"), 3000)});
const p2 = new Promise((resolve, reject) => {setTimeout(()=> resolve("P2 success"), 1000)});
const p3 = new Promise((resolve, reject) => {setTimeout(()=> resolve("P3 success"), 2000)});

    Promise.all([ p1, p2, p3 ])           //   ==> Success : wait for all of them to finish
    .then(res => console.log(res));   //---> [ 'P1 success', 'P2 success', 'P3 success' ]
                                          //       Failure : as soon as first error occured
                                    
    // Promise.allSetteled([ p1, p2, p3 ])     ==> wait for all of them to finish

    // Promise.race([ p1, p2, p3 ])            ==> value of the first settled promise
                                        
    // Promise.any([ p1, p2, p3 ])             ==> Success : wait for first success
    //                                             Failure : aggregate error (list of all errors)                                
