import {Injectable, EventEmitter} from "@angular/core";

declare var io: any;

@Injectable()
export class SocketService{
  socket: any;

  opponentID: number;
  opponentName: string;

  myID: EventEmitter<any> = new EventEmitter();
  myName: EventEmitter<any> = new EventEmitter();
  myNameInGame: string;


  runSocket(){
    this.socket = io.connect();
    this.socket.emit('create user' , this.myNameInGame);
    this.socket.on('get player credential' , (userInformation) => {
      this.myID.emit(userInformation.id);
      this.myName.emit(userInformation.name);
    });
  }


  setMyNameInGame(name){
    this.myNameInGame = name;
  }

  setOpponentName(name){
    this.opponentName = name;
  }
  setOpponentID(opponentID){
    this.opponentID = opponentID;
  }


  returnSocket(){
    return this.socket;
  }
  returnOpponentName(){
    return this.opponentName;
  }
  returnOpponentId(){
    return this.opponentID;
  }
  returnMyName(){
    return this.myNameInGame;
  }

}
