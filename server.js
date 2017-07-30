var express = require('express');
var path = require('path');

var port = process.env.PORT || 5000;
var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,  'views'));
app.use(express.static(path.join(__dirname, 'public')));

var home = require('./routes/home');

app.use('/', home);

app.listen(port, function(){
    console.log("App run on localhost:5000");
});
module.exports = app;