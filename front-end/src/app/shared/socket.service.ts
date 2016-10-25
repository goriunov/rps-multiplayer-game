import {Injectable, EventEmitter} from "@angular/core";
import {Router} from "@angular/router";

declare var io: any;

@Injectable()
export class SocketService{
  socket: any;

  opponentID: number;
  opponentName: string;

  myID: EventEmitter<any> = new EventEmitter();
  myName: EventEmitter<any> = new EventEmitter();
  myNameInGame: string;
  offlineTimer;

  constructor(private router: Router){}


  runSocket(){
    this.socket = io.connect();
    this.socket.emit('create user' , this.myNameInGame);
    this.socket.on('get player credential' , (userInformation) => {
      this.myID.emit(userInformation.id);
      this.myName.emit(userInformation.name);
    });

    if(this.offlineTimer){
      clearTimeout(this.offlineTimer);
    }

    this.socket.on('online' , ()=>{
      this.socket.emit('online');
      console.log('Got');
      if(this.offlineTimer){
        console.log('Renew');
        clearTimeout(this.offlineTimer);
      }
      this.offlineTimer = setTimeout(()=>{
        this.router.navigate(['/']);
      }, 5000);
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

  disconnection(){
    if(this.socket){
      this.socket.disconnect();
    }
  }
}
