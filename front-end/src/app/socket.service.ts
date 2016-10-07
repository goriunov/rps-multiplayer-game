import {Injectable, EventEmitter} from "@angular/core";

declare var io : any;

@Injectable()
export class SocketService{
  sockets: any;
  opponentID: number;
  myID: EventEmitter<any> = new EventEmitter();
  myName: EventEmitter<any> = new EventEmitter();
  setingName: string;
  opponentName: string;

  setName(name){
    this.setingName = name;
  }

  setOppenentName(name){
    this.opponentName = name;
  }



  runSocket(){
    this.sockets = io.connect();
    this.sockets.emit('create user' , this.setingName);


    this.sockets.on('id' , (userInfo) => {
      this.myID.emit(userInfo.id);
      this.myName.emit(userInfo.name);
    });
  }


  sendOpponentID(opponentID){
    this.opponentID = opponentID;
  }
  returnOpponentName(){
    return this.opponentName;
  }
  returnMyName(){
    return this.setingName;
  }





  getOpponentId(){
    return this.opponentID;
  }
  getSocket(){
    return this.sockets;
  }
}
