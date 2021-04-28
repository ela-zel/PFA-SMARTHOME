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

module.exports = app