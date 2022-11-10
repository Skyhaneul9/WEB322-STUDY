const exp = require("express") 
const app = exp();
const path = require("path");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

//create connectioin, make schema - type, connect with one modulem, add new customer and save, find it

const db1 = mongoose.createConnection("mongodb+srv://admin:<password>@web322.zd2xruj.mongodb.net/db1?retryWrites=true&w=majority");

const customer_schema = new mongoose.Schema({
    firstname: String,
    lastname: String,
    date: Date
});
const customer = db1.model("customer", customer_schema);


var c1 = new customer({ 
    firstname: "haneul",
    lastname: "roh",
    date: "nov"
 });

c1.save((e, data) => {
  // everything good
  if(e)
  {
    console.error("error");
  }
  else
  console.log(data);
});

customer.findOne({ username: loginData.usr, password:loginData.pss }, ["firstname", "lastname", "username"]).exec().then((data) =>{
            if(data) 
            {
             res.render("login", {firstname:data.firstname, lastname:data.lastname, username:data.username, layout: false});
            }

var port = process.env.PORT || 8080;
app.listen(port);
