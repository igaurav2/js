// ----- debug scope check and how eventListener work

/*  Local
        this: button#ClickMe
    Script
        count: 0
*/
let count =0;
document.getElementById("ClickMe").addEventListener("click", function() {
    console.log(count++);
});
/*  Local
        Return value: undefined
        this: button#ClickMe
    Script
        count: 1

 -----------------------------------------------------------------------------------------------------

    Local
        this: button#ClickMe
    Closure 
        (attachEventListeners)
    Script
        count: 1
*/
function attachEventListeners(){
    let count1 =0;
    document.getElementById("ClickMe").addEventListener("click", function() {
        console.log("at", count1++);
    });
}
attachEventListeners();
/*  Local
        Return value: undefined
        this: button#ClickMe
    Closure 
        (attachEventListeners)
    Script
        count: 1
*/