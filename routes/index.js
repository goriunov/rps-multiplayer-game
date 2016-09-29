module.exports = function(io) {

  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
  });


  function newUser(client, clientID) {
    USERS[clientID] = client;
  }


  var USERS = [];
  io.on('connection', function (client) {
    client.id = Math.random();
    var user = new newUser(client, client.id);
    console.log('Client connected with id: ' + USERS[client.id].id);
    client.on('disconnect', function () {
      console.log('Client disconnected with id: ' + USERS[client.id].id)
    });


    client.on('chose', function (str) {
      console.log(str);
      for (var i in USERS) {
        var socket = USERS[i];
        socket.emit('chose', str);
      }
    })

  });

  return router;
}