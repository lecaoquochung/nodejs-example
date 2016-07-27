// next(): call the next handler match the route path
var express = require("express");
var app = express();

app.get("/", function(req, res, next){
  res.write("Hello");
  next();
});

app.get("/", function(req, res, next){
  res.write(" World !!!");
  res.end();
});

app.listen(8080);
