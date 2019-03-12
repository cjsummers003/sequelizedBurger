var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var db = require('./models');

// Set Handlebars.
var exphbs = require("express-handlebars");

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

//Routes
require("./controllers/burgers_controller.js")(app);
// app.use("/", routes);

//Sync and Listen
db.sequelize.sync().then(function () {
    app.listen(port, function () {
        console.log("Server listening on: http://localhost:" + port);
    });
});