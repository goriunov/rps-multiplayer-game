module.exports = function(io) {

  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });


  function newUser(client, clientID) {
    USERS[clientID] = client;
    playersID.push(client.id);

  }


  var USERS = [];
  var playersID = [];

  io.configure(function () {
    io.set("transports", ["xhr-polling"]);
    io.set("polling duration", 10);
  });

  io.on('connection', function (client) {
    client.id = Math.random();


    client.emit('newClient' , client.id);
    user = new newUser(client, client.id);
    console.log('Client connected with id: ' + USERS[client.id].id);

    for (var i in USERS) {
      USERS[i].emit('all-users' , playersID);
    }



    client.on('disconnect', function () {
      playersID.splice(playersID.indexOf(client.id) , 1);
      console.log('Client disconnected with id: ' + USERS[client.id].id);
      delete USERS[client.id];

    });


    client.on('chose', function (str) {
        client.emit('chose', str.chose);
        console.log(USERS[str.opponentID]);
        USERS[str.opponentID].emit('chose', str.chose);
    });


    client.on('opponentID' , function(id){
      USERS[id.receiver].emit('opponentID' , id.opponentID);
    });

  });

  return router;
};