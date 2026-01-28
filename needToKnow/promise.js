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

