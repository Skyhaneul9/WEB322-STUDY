
function PositiveNum(num) {
    if(num < 0)
    {
        throw new Error(' NEGATIVE!!!');
    }
    return num;
}
let a = -6, num1;
try {
   num1 = PositiveNum(a);
} catch (e) {
    console.log("THis is not a positive number"+e.message);
}

//example two
function getRectArea(width, height) {
    if (isNaN(width) || isNaN(height)) {
      throw 'Parameter is not a number!';
    }
  }
  
  try {
    getRectArea(3, 'a');
  } catch (e) {
    console.error(e);
    // expected output: "Parameter is not a number!"
  }

  //Promise
  function outputA(){
    var randomTime = Math.floor(Math.random() * 3000) + 1;

    return new Promise(function(resolve, reject){ // place our code inside a "Promise" function
        setTimeout(function(){
            console.log("A");
            resolve("outputA resolved!"); // call "resolve" because we have completed the function successfully
        },randomTime);
    });   
}

// call the outputA function and when it is "resolved", output a confirmation to the console

outputA().then(function(data){
    console.log(data);
});
  




///////
var random = Math.floor(Math.random()* 100);

var promisess = new Promise((resolve, reject) =>{
    if(random >50){
        resolve("reslove 50");
    }
    reject('reject less than 50');
})

promisess.then(()=>{
    console.log("resolved");
}).catch(()=>{
    console.log("rejected");
})