
var express = require("express");
var path = require("path");

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(3000, function() {
    console.log("App listening on PORT: 3000 ");
  });