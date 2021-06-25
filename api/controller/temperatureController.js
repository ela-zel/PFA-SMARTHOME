
const temperatureModel=require("../modals/temperature.js")
var mongoose = require("mongoose");

exports.getData = function (req , res) {
    temperatureModel.find({},function (err, data) {
        if (err) return console.error(err);
        console.log("data"+data);
        res.send(data)
      })
}

exports.save = function (req , res) {
   //Save log
var newData = new temperatureModel({
    data: req.data,
  });

  newData.save(function (err, log) {
      if (err) res.send(err);
  });
}
