const express = require("express");
const app = express();
// index page
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

// about page
app.get('/login', function(req, res) {
    res.render('pages/login.ejs');
});
//appliances
app.get('/appliances', function(req, res) {
    res.render('pages/appliances.ejs');
});
//Dashboard
app.get('/index-2', function(req, res) {
    res.render('pages/index-2.ejs');
});
//lights
app.get('/lights', function(req, res) {
    res.render('pages/lights.ejs');
});
app.get('/cameras', function(req, res) {
    res.render('pages/cameras.ejs');
});
app.get('/climate', function(req, res) {
    res.render('pages/climate.ejs');
});
app.get('/settings', function(req, res) {
    res.render('pages/settings.ejs');
});
app.get('/login', function(req, res) {
    res.render('pages/login.ejs');
});
module.exports = app
