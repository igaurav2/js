const p = new Promise((resolve, reject)=>{
    setTimeout(() => resolve("Promise is resolved"), 10000);
});

// // always returns a promise
// async function getData(){
//     // return "Gaurav"; // it will wrapped inside a promise
//     return p;
// }

// const dataPromise = getData();
// console.log(dataPromise);
// dataPromise.then(res => console.log(res));

// // Await can only be used inside a async function to handle promises
//  async function returnData(){
//     console.log("Wait");
//     const val = await p;     // looks like jsEngine was waiting for promise to be resolved
//     console.log("Waiting");
//     console.log(val);
// }
// returnData();


//------- how fetch works ==> fetch() => Response.json() => jsonData
const gitApi = "https://api.github.com/users/igaurav2";
async function handlePromise(){
    // const data = await fetch(gitApi);  // response object is returned
    // const jsonData = await data.json()
    // console.log(jsonData);

    try{            // whenever we are making api calls, wrap it inside try block
        const data = await fetch(gitApi);
        const jsonData = await data.json()
        console.log(jsonData);
    } catch (err){             // we can handle our error using try catch 
        console.log(err);
    }
}
handlePromise();

// handlePromise().catch(err => console.log(err));  // if not handled inside function