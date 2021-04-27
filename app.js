// load the things we need
var express = require('express');
const mqtt = require('mqtt')
var app = express();
//mqtt
let options = {
    port: 1883,
    username: "pi",
    password: "2021"
  };
  let client = mqtt.connect('mqtt://192.168.1.22', options);

  client.on('connect', function() { // When connected
  //Subscribe to a topic
  client.subscribe('dev/test', function() {});
  //Publish a new message to the broker every 4 seconds
  setInterval(function(){
    //Create a random number (0-100)
    let rand = Math.random() * 100;
    //Publish a message to a specific topic
    //The message HAS to be converted to a String
    client.publish('smartHome/led/livingRoom', "true", function() {
      //console.log("Pushed: " + rand);
      //client.end(); // Close the connection when published
    });
  }, 4000);
});

client.on('message',function(topic, message, packet){
	console.log("message is "+ message);
	console.log("topic is "+ topic);
});
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file
app.use("/assets",express.static('assets'))
// index page
app.get('/', function(req, res) {
    res.render('pages/index.ejs');
});

// about page
app.get('/login', function(req, res) {
    res.render('pages/login.ejs');
});

app.listen(8080);
console.log('8080 is the magic port');