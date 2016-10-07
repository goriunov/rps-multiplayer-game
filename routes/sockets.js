
module.exports = function(io){

    ALL_PLAYERS = [];
    AVILABLE_PLAYERS = [];

    function createPlayer(id , client, name){
        ALL_PLAYERS[id] = client;
        AVILABLE_PLAYERS.push({name: name, id: id});
    }

    function emitter(){
        for(var i in ALL_PLAYERS){
            ALL_PLAYERS[i].emit('players in' , AVILABLE_PLAYERS);
        }
    }


    function myIndexOf(obj) {
        for (var i = 0; i < AVILABLE_PLAYERS.length; i++) {
            if (AVILABLE_PLAYERS[i].name == obj.name && AVILABLE_PLAYERS[i].id == obj.id) {
                return i;
            }
        }
        return -1;
    }


    io.on('connection', function (client) {

        //Creating client and comunication (invitation)
        client.on('create user' , function(name){
            client.id = Math.random()*(ALL_PLAYERS.length + 1)*Math.random()*(0.1233+ALL_PLAYERS.length);
            client.name = name;
            client.decision = '';
            createPlayer(client.id, client , client.name);
            emitter();
            client.emit('id' , {id: client.id , name: client.name});
        });



        client.on('disconnect' , function(){
            if(ALL_PLAYERS[client.id]) {
                if (ALL_PLAYERS[client.id].opponent > 0) {
                    ALL_PLAYERS[ALL_PLAYERS[client.id].opponent].emit('leaved');
                }
            }
            ALL_PLAYERS.splice(ALL_PLAYERS.indexOf(client.id) ,1);
            if(myIndexOf({name: client.name , id: client.id}) != -1) {
                AVILABLE_PLAYERS.splice(myIndexOf({name: client.name , id: client.id}), 1);
            }
            emitter();
        });


        client.on('on available' , function(){
            if(ALL_PLAYERS[client.id] != null){
                if(myIndexOf({name: client.name , id: client.id}) == -1){
                    AVILABLE_PLAYERS.push({name: client.name , id: client.id});
                    client.emit('id' , {id: client.id , name: client.name});
                    emitter();
                }
            }
        });


        client.on('call duel' , function(call){
            ALL_PLAYERS[call.opponent].emit('called on duel' , {id: call.senderID , name: call.senderName});
        });


        client.on('accepted duel' , function(accept){
            ALL_PLAYERS[accept.caller].opponent = accept.whoIsAgree;
            ALL_PLAYERS[accept.whoIsAgree].opponent = accept.caller;
            ALL_PLAYERS[accept.caller].emit('accepted duel' , {id:accept.whoIsAgree , name: ALL_PLAYERS[accept.whoIsAgree].name});
        });

        client.on('on unavailable' , function(id){
            if(myIndexOf({name: client.name , id: id}) != -1) {
                AVILABLE_PLAYERS.splice(myIndexOf({name: client.name , id:id}), 1);
            }
            emitter();
        });

        client.on('decline duel' , function(id){
            ALL_PLAYERS[id.receiver].emit('declined duel' , id.myID);
        });
    //****************



    //Game process

        client.on('game decision' , function(userDecision){
            client.decision = userDecision.decision;

            if(client.decision != '' && ALL_PLAYERS[userDecision.opponentID].decision != ''){
                client.emit('final decision' , {myDecision: client.decision , opponentDecision: ALL_PLAYERS[userDecision.opponentID].decision});
                ALL_PLAYERS[userDecision.opponentID].emit('final decision' , {myDecision: ALL_PLAYERS[userDecision.opponentID].decision, opponentDecision: client.decision });

                client.decision = '';
                ALL_PLAYERS[userDecision.opponentID].decision = '';
            }

        });


        client.on('leaved' , function(users){
            ALL_PLAYERS[users.opponentID].emit('leaved');
        });

        client.on('waiting' , function( id){
            if(ALL_PLAYERS[id]) {
                ALL_PLAYERS[id].emit('waiting');
            }
        });

        client.on('replay' , function(replay){
            client.replay = true;

            if(client.replay && ALL_PLAYERS[replay.opponentID].replay ){
                client.emit('replay');
                ALL_PLAYERS[replay.opponentID].emit('replay');

                client.replay = false;
                ALL_PLAYERS[replay.opponentID].replay = false;
            }

        });




    });





};