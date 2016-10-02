import {Injectable, EventEmitter} from "@angular/core";

declare var io : any;

@Injectable()
export class SocketService{
  sockets: any;
  opponentID: number;
  myID: EventEmitter<any> = new EventEmitter();
  myName: EventEmitter<any> = new EventEmitter();

  runSocket(){
    this.sockets = io('/');
    this.sockets.emit('create user' , 'Some name');


    this.sockets.on('id' , (userInfo) => {
      this.myID.emit(userInfo.id);
      this.myName.emit(userInfo.name);
    });
  }


  sendOpponentID(opponentID){
    this.opponentID = opponentID;
  }




  getOpponentId(){
    return this.opponentID;
  }
  getSocket(){
    return this.sockets;
  }
}
