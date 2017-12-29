// =============================================================
// DEPENDENCIES
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// =============================================================
// EXPRESS SETUP
// Sets up the Express App Server
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// =============================================================
// ROUTER
// The below code points the server to the "route" files.
// =============================================================

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// =============================================================
// LISTENER
// Starts the server.
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});