const exp = require("express") 
const app = exp();
const path = require("path");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const mongoose = require("mongoose");

const db1 = mongoose.createConnection("mongodb+srv://admin:<password>@web322.zd2xruj.mongodb.net/db1?retryWrites=true&w=majority");

const customer_schema = new mongoose.Schema({
    comment: String,
    author: String,
    date: Date
});
const customer = db1.model("customer", customer_schema);


var c1 = new customer({ 
    comment: "sjf",
    author: "Strifsng",
    date: "Datdsfe"
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

var port = process.env.PORT || 8080;
app.listen(port);