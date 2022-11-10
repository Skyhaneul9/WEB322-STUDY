const exp = require("express") 
const app = exp();
//const path = require("path");
const bodyParser = require("body-parser");
const handlebars = require("express-handlebars");
const Sequelize = require('sequelize');

app.engine(".hbs", handlebars.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use(bodyParser.urlencoded({extended: true}));

var obj = new Sequelize('database', 'user', 'password', {
    host: 'host',
    dialect: 'postgres',
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    query: { raw: true }
});

// Define a "Book" model
var Book = obj.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true, // use "project_id" as a primary key
        autoIncrement: true // automatically increment the value
    },
    firstname: Sequelize.STRING,
    lastname: Sequelize.STRING,
    username: Sequelize.STRING,
    password: Sequelize.STRING,
    description: Sequelize.TEXT
},{
    createdAt: false, // disable createdAt
    updatedAt: false // disable updatedAt
});

// synchronize the Database with our models and automatically add the 
// table if it does not exist

obj.sync().then(function () {

    // create a new "Book" and add it to the database
    Book.create({
        firstname: 'alex',
        lastname: "wu",
        username: "book1",
        password: "skljfksdjf"
        description: 'First Book'
    }).then(function (book) {
        // you can now access the newly created Book via the variable project
        console.log("success!")
    }).catch(function (error) {
        console.log("something went wrong!");
    });
});

app.get("/", function(req, res){
    res.render("home", {layout : false});
});

app.post("/login", function(req, res){

    var loginData = {
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        username : req.body.username,
        password : req.body.password
    }
    res.render("login", {data: LoginData, layout : false});

    Book.findAll({
        attributes: ['username'],
        where: {
            username : loginData.username
        }
    }
    ).then((data)=>{
        console.log(data.username);
    });
});


var port = process.env.PORT || 8080;
app.listen(port);
//npm install sequelize
//npm install pg p-hstore
