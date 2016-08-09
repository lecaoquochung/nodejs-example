var app = require("express")();

function checkLogin() {
  return true;
}

function logRequest() {
  console.log("New request");
}

app.use(function(req, res, next){
  logRequest();
  next();
})

app.use(function(req, res, next){
  if(checkLogin()) {
      next();
  } else {
      res.send("You are not logged in!!!");
  }
})

app.get("/dashboard", function(req, res, next){
      res.send("This is the dashboard page");
});

app.get("/profile", function(req, res, next){
      res.send("This is the dashboard page");
});

app.listen(8080);
console.log('The server is running on port: http://127.0.0.1:8080');
