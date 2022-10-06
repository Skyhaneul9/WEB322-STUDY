//WEEK3 NOTE
// 1. Creating Objects
// Object Literal Notation
// Class Keyword
// 2. var, let, const
// 3. ERROR
// Throwing Errors

//WEEK4 NOTE
// 1. express.js
// The Application object
// The Request object
// The Response object
// Routing, static files - img
// Error Handling

console.log("==== WEEK3 - Creating object ====");
// Object Literal Notation
var obj = {
    usrname:"Sky",
    fname: "Haneul",
    lname: "Roh",
    address: {
        street_no: 7000,
        street_name: "Finch Ave E"
    }
};

console.log(obj.usrname); // prints username from object
console.log(obj.fname); // prints firstname
console.log(obj.address.street_no +" "+obj.address.street_name); //7000 Finch Ave E
//prints street number and name with a space

/*var part = {
    id: 1234,
    info: {
        name: 'book',
        shelf: 56713,
        ref: [5618, 5693]
    },
    toString: function() {
        return this.info.name + ' (#' + this.id + ')';
    }
};

console.log(part.toString()); // prints "book (#1234)"
*/

var hey = {
    id: 1010101010,
    studentInfo: {
        name: "Haneul Roh",
        program: "CPP",
    },
    toString: function() {
        return this.studentInfo.name + ', Student ID: ' + this.id;
    }
};
console.log(hey.toString());


var bigObj = [
    {
        username : "Hqushtom",
        fname : "Haytham",
        lname : "Qushtom",
        graduate: true,
        address : {
            //"111 street name province country postal code"
            street_no: 332,
            street_name: "sss sss"
        } 
    },
    {
        username : "Hqushtom",
        fname : "Haytham",
        lname : "Qushtom",
        graduate: true,
        address : {
            //"111 street name province country postal code"
            street_no: 332,
            street_name: "sss sss"
        } 
    }
];


try{
    if(true) {
        let y =1; //let, only inside of block
        console.log("y="+y);
    }
    console.log(y);
} catch(e) {
    //console.log("Error"); 
    console.log(e); //it stops after facing error. cannot show 2 errors
}

function divide(x,y){
    if(y == 0){
    throw new Error("Division by Zero!");
    }
    return x / y;
}

let a = 3, b = 0, c;

try{
    c = divide(a,b);
}catch(ex){
    console.log("uh oh, an error occurred: " + ex.message); 
    // outputs: uh oh, an error occurred: Division by Zero!
    c = NaN;
}

console.log(a + " / " + b + " = " + c);

//promises


console.log("=================================");
// output "A" after a random time between 0 & 3 seconds
function outputA(){

    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("A");
            resolve("outputA() complete");
        },randomTime);
    });   
}

// output "B" after a random time between 0 & 3 seconds
function outputB(msg){
    // NOTE: msg holds the 'resolve' message from the 
    // previous function in the chain
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("B");
            resolve("outputB() complete");
        },randomTime);
    });   
}

// output "C" after a random time between 0 & 3 seconds
function outputC(msg){
    // NOTE: msg holds the 'resolve' message from the 
    // previous function in the chain
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log("C");
            resolve("outputC() complete");
        },randomTime);
    });   
}

// invoke the functions in order

outputA().then(outputB).then(outputC).catch(function(rejectMsg){
    // catch any errors here
    console.log(rejectMsg);
});

console.log("HI");


//================================================//

