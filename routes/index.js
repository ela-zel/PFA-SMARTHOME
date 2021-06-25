const express = require("express");
const app = express();
const accountModel=require("../api/modals/account.js")

// index page
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

// about page
app.get('/login', function(req, res) {

    res.render('pages/login.ejs');
});
app.post(
    "/login",
    function (req, res) {
 accountModel.findOne({ email: req.body.email,password:req.body.password },function (err, data) {
        if (err) return console.error(err);
        console.log("data"+data);
        if (!data) {
            res.render("pages/login", { msg: "Email or password incorrect !" });
        }
        else res.render("pages/index", { user: data });
        
        
      })
      
    }
  );
//appliances
app.get('/appliances', function(req, res) {
    res.render('pages/appliances.ejs');
});
//Dashboard
app.get('/index-2', function(req, res) {
    res.render('pages/index.ejs');
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
