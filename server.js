var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app

var app = express();
app.use(express.static(__dirname + "/static"));
app.use(express.static(__dirname + "/static/images"));
app.set('views', __dirname + '/views'); 
app.set('view engine', 'ejs');



app.get('/', function(request, response) {
//    response.send("<h1>Hello Express</h1>");
    response.render('index');
})

app.get('/cars', function(request, response){
    response.render('cars');
})

app.get('/cats', function(request, response){
    response.render('cats');
})

app.get('/form', function(request, response){
    response.render("new");
});








// app.get("/cars.html", function (request, response){
//     var users_array = [
//         {name: "Michael", email: "michael@codingdojo.com"}, 
//         {name: "Jay", email: "jay@codingdojo.com"}, 
//         {name: "Brendan", email: "brendan@codingdojo.com"}, 
//         {name: "Andrew", email: "andrew@codingdojo.com"}
//     ];
//     response.render('users', {users: users_array});
// })


// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("Serving on port 8000");
})