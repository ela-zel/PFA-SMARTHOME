
$(window).on('load', function () {
    //mqtt

var wsbroker = "192.168.1.35";  //mqtt websocket enabled broker
var wsport = 9001 // port for above

var client = new Paho.MQTT.Client(wsbroker, wsport,
    "myclientid_" + parseInt(Math.random() * 100, 10));

client.onConnectionLost = function (responseObject) {
    console.log("connection lost: " + responseObject.errorMessage);
};



var options = {
    userName: "pi",
    password: "2021",
    timeout: 3,
    onSuccess: function () {
        console.log("mqtt connected");
        client.subscribe('smartHome/frontDoor/status', { qos: 1 });
        client.subscribe('smartHome/flame', { qos: 2 });
        client.subscribe('smartHome/gas', { qos: 1 });
        // Connection succeeded; subscribe to our topic, you can add multile lines of these
        /* client.subscribe('smartHome/led/livingRoom', {qos: 1});
    
        
            //use the below if you want to publish to a topic on connect
            message = new Paho.MQTT.Message("true");
            message.destinationName = "smartHome/led/kitchen";
            client.send(message);*/

    },
    onFailure: function (message) {
        console.log("Connection failed: " + message.errorMessage);
    }
};
client.onMessageArrived = function (message) {
    console.log(message.payloadString)
    switch(message.destinationName) {
        case "smartHome/flame":
          
          $('#fire-alarmModal').modal('toggle');
          console.log("smartHome/flameeee : "+message.payloadString)
          break;
        case "smartHome/gas":
            $('#alarmModal').modal('toggle');
            console.log("smartHome/gas : "+message.payloadString)
          break;
        case "smartHome/frontDoor/status":
            if (message.payloadString == "open") {
                $('[data-unit="garage-doors"] .status').html('Open').addClass('text-secondary');
                $('[data-unit="garage-doors"] button').prop('disabled', true);
            } else {
                $('[data-unit="garage-doors"] .status').html('Closed').removeClass('text-secondary');
                $('[data-unit="garage-doors"] button').prop('disabled', false);
            }
            break;
        default:
          // code block
      } 
};
client.connect(options);
})