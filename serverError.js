//ERROR handling
const exp = require("express");
const app = exp();
const path = require("path");

function errorHandling()
{
    console.log("test");
    //if something - throw error
    throw 'ERROR';
}
app.use(errorHandling);

app.use((err, req, res, next)=>{
    console.log("This is error that is caught")
})

app.listen(8080);

