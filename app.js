// load the things we need
var express = require('express');
const mqtt = require('mqtt')
var app = express();
const mongoose = require("mongoose");
const apis = require("./api/routes.js");
// parse env variables
require("dotenv").config();
app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())
//db
const uri = `${process.env.SERVER_URI}`;
mongoose.connect(uri, { useNewUrlParser: true,useUnifiedTopology: true})
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));
//mqtt
let options = {
    port: 1883,
    username: "pi",
    password: "2021"
  };
  let client = mqtt.connect('mqtt://192.168.1.25', options);

  client.on('connect', function() { // When connected
  //Subscribe to a topic
  client.subscribe('dev/test', function() {});
  //Publish a new message to the broker every 4 seconds
  setInterval(function(){
    //Publish a message to a specific topic
    //The message HAS to be converted to a String
    client.publish('smartHome/led/livingRoom', "true", function() {
      console.log("Pushed: true");
      //client.end(); // Close the connection when published
    });
  }, 4000);
});

client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});
var routes = require("./routes");
app.use("/api", apis);

app.use("/",routes)
// set the view engine to ejs

app.set('view engine', 'ejs');
// use res.render to load up an ejs view file
app.use("/assets",express.static('assets'))


app.listen(8080);
console.log("http://localhost:8080/");