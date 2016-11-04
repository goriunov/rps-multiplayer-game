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
  offlineTimer:any;
  userIsOnline: any;

  constructor(private router: Router){}


  runSocket(){
    if(!this.socket) {
      this.socket = io.connect();
      this.socket.emit('create user', this.myNameInGame);
      this.socket.on('get player credential', (userInformation) => {
        this.myID.emit(userInformation.id);
        this.myName.emit(userInformation.name);
      });

      if (this.offlineTimer) {
        clearTimeout(this.offlineTimer);
      }

      this.socket.on('online', ()=> {
        if (this.offlineTimer) {
          clearTimeout(this.offlineTimer);
        }
        this.offlineTimer = setTimeout(()=> {
          this.router.navigate(['/']);
        }, 5000);
        this.userIsOnline = setTimeout(()=>{
          this.socket.emit('online');
        } ,1000);

      });
    }
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
      clearTimeout(this.userIsOnline);
      this.socket.disconnect();
      this.socket = null;
    }
  }
}
