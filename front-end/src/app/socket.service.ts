import {Injectable, EventEmitter} from "@angular/core";

declare var io : any;

@Injectable()
export class SocketService{
  sockets: any;
  opponentID: number;
  myID: EventEmitter<any> = new EventEmitter();

  runSocket(){
    this.sockets = io('/');
    this.sockets.emit('create user' , 'My Name');


    this.sockets.on('id' , (id) => {
      this.myID.emit(id);
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
