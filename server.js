var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/app/public", express.static(path.join(__dirname, "public")));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/index.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);
