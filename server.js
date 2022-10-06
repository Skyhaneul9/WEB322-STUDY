const exp = require("express");
const app = exp();
const path = require("path");
const { send } = require("process");
//app.use('/static', exp.static(path.join(__dirname, 'public'))) -- directory named public

//app.use
app.use(function(req,res,next){
    console.log("Test 1");
    next();
});

//app.use(function(req,res,next){
//    console.log("Test 2");
//    next();
//});

function test2(req,res,next) {
    console.log("Test 2");
    next();
}

app.use(test2);

//app.get
app.get("/", function(req,res){
    res.send("Hello. This is get function");
})

app.get("/about", function(req,res){
    res.sendFile(path.join(__dirname, "about.html"));
})



app.use(function (req,res,next) {
    //res.send("Page not found");
    //res.sendFile();
    res.redirect("/");
    next();

})



//var port = process.env.PORT || 8080; 
//app.listen(port); 
app.listen(8080);

//=====================================================//
//=====================================================//



//app.use((req, res) => {
//    res.status(404).send("Page Not Found");
//});















/*app.route("/products")
    .get(function (req, res){
        res.send("route")
    }).post(function(req,res){

    });


function userValidation(req,res,next){

    if(true){
        next();
    } else{
        res.redirect("/");
    }
}
*/