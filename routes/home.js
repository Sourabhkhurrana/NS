
var express = require('express');

var routes = express.Router();
var ejs = require('ejs');


routes.get('/', function(req, res){
    res.render('index');
});

module.exports = routes;