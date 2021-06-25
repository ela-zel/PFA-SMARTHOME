
const accountModel=require("../modals/account.js")
var mongoose = require("mongoose");

exports.getData = function (req , res) {
    accountModel.find({},function (err, data) {
        if (err) return console.error(err);
        console.log("data"+data);
        res.send(data)
      })
}

exports.save = function (req , res) {
   //Save log
   console.log(req.body)
let newData = new accountModel({
    email:req.body.email,
    password: req.body.password,
    lname: req.body.lname,
    fname: req.body.fname,
    phone: req.body.phone
  });

  newData.save(function (err, log) {
      if (err) res.send(err);
      res.send("Account added !");
  });
}
exports.update = function (req , res) {
    accountModel.findOneAndUpdate({ _id: req.params.id }, req.body,{
        new: true
      }, function (
        err,
        account
      ) {
        if (err) {
          res.status(403).send(err);
        }
        res.json(account);
      });
 }

 exports.login = function (req , res) {
    accountModel.findOne({ email: req.body.email,password:req.body.password },function (err, data) {
        if (err) return console.error(err);
        console.log("data"+data);
        if (!data) {
            res.send("Email or password incorrect , try again !")
        }
        else res.send(data)
        
        
      })
 }
