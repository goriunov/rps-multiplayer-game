module.exports = function(io){

    var connectedPlayers = [];
    var playersAvailableForGame = [];

    io.on('connection', function (client) {
        client.on('create user' , function(name){
            client.id = Math.random()*(connectedPlayers.length + 1)*Math.random()*(0.1233+connectedPlayers.length);
            client.name = name;
            client.decision = '';
            client.calledOnDuell = [];
            createPlayer(client.id, client , client.name);
            client.emit('get player credential' , {id: client.id , name: client.name});

            client.emit('online');

            emitter();
        });

        client.on('disconnect' , function(){
            disconnection();
            emitter();
        });

        client.on('on available' , function(){
            if(connectedPlayers[client.id] != null){
                if(myIndexOf({name: client.name , id: client.id}) == -1){
                    playersAvailableForGame.push({name: client.name , id: client.id});
                    client.emit('get player credential' , {id: client.id , name: client.name});
                    emitter();
                }
            }
        });

        client.on('call on duel' , function(call){
            client.calledOnDuell.push(call.opponent);
            connectedPlayers[call.opponent].emit('called on duel' , {id: call.senderID , name: call.senderName});
        });

        client.on('accept duel' , function(agreement){
            connectedPlayers[agreement.caller].opponentID = agreement.consentient;
            connectedPlayers[agreement.consentient].opponentID = agreement.caller;
            connectedPlayers[agreement.caller].emit('duel accepted', {
                id: agreement.consentient,
                name: connectedPlayers[agreement.consentient].name
            });
            connectedPlayers[agreement.caller].emit('can play');
            connectedPlayers[agreement.consentient].emit('can play');

        });

        client.on('unavailable' , function(id){
            if(myIndexOf({name: client.name , id: id}) != -1) {
                playersAvailableForGame.splice(myIndexOf({name: client.name , id:id}), 1);
            }
            emitter();
        });

        client.on('decline duel' , function(declineIDs){
            if(connectedPlayers[declineIDs.receiver]) {
                connectedPlayers[declineIDs.receiver].emit('duel declined', declineIDs.myID);
            }
        });

        client.on('game decision' , function(userDecision){
            client.decision = userDecision.decision;
            if(client.decision != '' && connectedPlayers[userDecision.opponentID].decision != ''){
                client.emit('final decision' , {myDecision: client.decision , opponentDecision: connectedPlayers[userDecision.opponentID].decision});
                connectedPlayers[userDecision.opponentID].emit('final decision' , {myDecision: connectedPlayers[userDecision.opponentID].decision, opponentDecision: client.decision });
                client.decision = '';
                connectedPlayers[userDecision.opponentID].decision = '';
            }
        });

        client.on('left' , function(users){
            if(client.id && users.opponentID > 0){
                if(connectedPlayers[users.opponentID]){
                    connectedPlayers[users.opponentID].emit('left' , client.id);
                }
            }
        });

        client.on('waiting' , function(id){
            if(connectedPlayers[id]) {
                connectedPlayers[id].emit('waiting');
            }
        });

        client.on('replay' , function(replay){
            client.replay = true;
            if(client.replay && connectedPlayers[replay.opponentID].replay ){
                client.emit('replay');
                connectedPlayers[replay.opponentID].emit('replay');
                client.replay = false;
                connectedPlayers[replay.opponentID].replay = false;
            }
        });

        client.on('online' , function(){
            if(client.timerOnOffline){
                clearTimeout(client.timerOnOffline);
            }
            client.emit('online');
            client.timerOnOffline = setTimeout(function(){
                if(client) {
                    disconnection();
                    emitter();
                }
            }, 5000);
        });

        function disconnection(){
            if (connectedPlayers[client.id]) {
                if (connectedPlayers[client.id].opponentID > 0 && connectedPlayers[connectedPlayers[client.id].opponentID]) {

                    connectedPlayers[connectedPlayers[client.id].opponentID].emit('left');
                }
            }
            if(client.calledOnDuell) {
                for (var i = 0; i < client.calledOnDuell.length; i++) {
                    if (connectedPlayers[client.calledOnDuell[i]]) {
                        connectedPlayers[client.calledOnDuell[i]].emit('left', client.id);
                    }
                }
            }
            delete connectedPlayers[client.id];
            if (myIndexOf({name: client.name, id: client.id}) != -1) {
                playersAvailableForGame.splice(myIndexOf({name: client.name, id: client.id}), 1);
            }
        }
    });


    function createPlayer(id , client, name){
        connectedPlayers[id] = client;
        playersAvailableForGame.push({name: name, id: id});
    }

    function emitter(){
        for(var i in connectedPlayers){
            connectedPlayers[i].emit('available players' , playersAvailableForGame);
        }
    }

    function myIndexOf(obj) {
        for (var i = 0; i < playersAvailableForGame.length; i++) {
            if (playersAvailableForGame[i].name == obj.name && playersAvailableForGame[i].id == obj.id) {
                return i;
            }
        }
        return -1;
    }



};