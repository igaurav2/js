const arr = [2, 4, 3, 7];

// ---------- map 
function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

Array.prototype.calculate = function(logic){
    const output = [];
    for(let i=0; i<arr.length; ++i){
        output.push(logic(arr[i]));
    }
    return output;
}
console.log(arr.calculate(triple));     //---> [ 6, 12, 9, 21 ]

console.log(arr.map(double));   //---> [ 4, 8, 6, 14 ]

console.log(arr.map((x) => x.toString(2))); //---> [ '10', '100', '11', '111' ]


//---------- filter
function oddValue(x){
    return x%2;
}

console.log(arr.filter(oddValue));        // [ 3, 7 ]
console.log(arr.map(oddValue))      // [ 0, 0, 1, 1 ]

console.log(arr.filter(x => x>4));    // [ 7 ]


//----------- reduce
function findSum(arr) {
    let sum =0;
    for(let i=0; i<arr.length; ++i){
        sum = sum + arr[i];
    }
    return sum;
}
console.log(findSum(arr));  //---> 16

const out = arr.reduce(function(sum, curr){
    sum += curr;
    return sum;
},0);
console.log(out);    //---> 16


//--------------------------------------------------------------------------------------------
const users = [
    {first: "Gaurav", last: "Pandey", age: "24"},
    {first: "Rishabh", last: "Mishra", age: "22"},
    {first: "Souvik", last: "Adak", age: "24"},
];

//----- fullName
console.log(users.map(x => x.first +" "+ x.last));

//----- ageMap
const ageMap = users.reduce(function(acc, curr){
    if(acc[curr.age])   acc[curr.age] = ++acc[curr.age];
    else    acc[curr.age] =1;
    return acc;
},{});

console.log(ageMap);    //---> { '22': 1, '24': 2 }


//---- firstName of people whose age > 22
console.log(users.filter(x=> x.age>22).map(x=> x.first));

const firstNameAgeLessThan25 = users.reduce(function(acc, curr){
    if(curr.age<25) acc.push(curr.first);
    return acc;
},[]);
console.log(firstNameG22);  //---> [ 'Gaurav', 'Rishabh', 'Souvik' ]