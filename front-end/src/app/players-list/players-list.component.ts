import { Component, OnInit, OnDestroy , NgZone , trigger, state, animate, transition, style} from '@angular/core';
import { Router } from "@angular/router";
import { SocketService } from "../shared/socket.service";
import { UserInformation } from "./userInformation";

@Component({
  selector: 'my-player-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['players-list.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateY(0)'})),
      transition('void => *', [
        style({transform: 'translateY(-100%)'}),
        animate(200)
      ]),
      transition('* => void', [
        animate(200, style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
})

export class PlayersListComponent implements OnInit, OnDestroy{
  availablePlayers: UserInformation[] = [];

  allCallsOnDuel: UserInformation[] = [];
  invitedPeople: number[] = [];
  invitationListOpened: boolean = false;

  myID: number;
  myName: string;
  opponentID: number;
  offlineTimer:any;

  socket: any;
  invitedInterval;
  blink;

  constructor( private router: Router,
               private socketService: SocketService,
               private zone:NgZone){}


  ngOnInit(){
    this.socketService.runSocket();
    this.socket = this.socketService.returnSocket();
    this.socket.emit('on available');

    this.socket.on('available players' , (availablePlayers) =>{
      this.availablePlayers = availablePlayers;
      this.zone.run(()=>{});
    });

    this.socketService.myID.subscribe((id) =>{
      this.myID = id;
    });

    this.socketService.myName.subscribe((name) =>{
      this.myName = name;
      this.zone.run(()=>{});
    });
    this.socket.on('can play' , ()=>{
      this.router.navigate(['/game']);
    });

    this.socket.on('online' , ()=>{
      this.socket.emit('online');
      console.log('works');
      if(this.offlineTimer){
        clearTimeout(this.offlineTimer);
      }
      this.offlineTimer = setTimeout(()=>{
        this.router.navigate(['/']);
      }, 6000);
    });

    this.socket.on('called on duel' , (opponent) =>{
      let caller : UserInformation = new UserInformation( opponent.name , opponent.id );
      this.allCallsOnDuel.push(caller);
      if(this.invitedInterval) {
        clearInterval(this.invitedInterval);
      }
      this.invitedInterval = setInterval(()=>{
        if(this.blink){
          this.blink = false;
        }else{
          this.blink = true;
        }
        this.zone.run(()=>{});
      }, 300);
      this.zone.run(()=>{});
    });

    this.socket.on('duel accepted' , (opponent) =>{
      this.opponentID = opponent.id;
      this.socketService.setOpponentName(opponent.name);
      this.socketService.setOpponentID(this.opponentID);
      this.socket.emit('unavailable' , this.myID);
    });

    this.socket.on('duel declined' , (id) =>{
      this.invitedPeople.splice(this.invitedPeople.indexOf(id) , 1);
      this.zone.run(()=>{});
    });

    this.socket.on('left' , (id)=>{
      this.decline(id);
    });
  }

  invitationListFunction(){
    this.blink = false;
    if(this.invitationListOpened){
      this.invitationListOpened = false;
    }else{
      this.invitationListOpened = true;
    }
    if(this.invitedInterval) {
      clearInterval(this.invitedInterval);
    }
  }


  decline(id){
    if(id) {
      this.socket.emit('decline duel' , {myID: this.myID , receiver: id});
      if (this.myIndexOf(id) != -1) {
        this.allCallsOnDuel.splice(this.myIndexOf(id), 1);
      }
    }
  }


  accept(acceptedId  , name){
    this.opponentID = acceptedId;
    this.socketService.setOpponentName(name);
    this.socketService.setOpponentID(this.opponentID);
    this.socket.emit('accept duel' ,{consentient: this.myID , caller: this.opponentID});
  }


  chooseOpponent(opponentID){
    let permissionToInvite:boolean = false;

    if (this.invitedPeople.indexOf(opponentID) == -1) {
      permissionToInvite = true;
    }

    if(permissionToInvite) {
      this.socket.emit('call on duel', {senderID: this.myID  ,senderName: this.myName, opponent: opponentID});
      this.invitedPeople.push(opponentID);
    }
  }


  ngOnDestroy(){
    this.socket.emit('unavailable' , this.myID);
    clearInterval(this.invitedInterval);
    clearTimeout(this.offlineTimer);
    this.blink = false;

  }


  myIndexOf(objId) {
    for (var i = 0; i < this.allCallsOnDuel.length; i++) {
      if (this.allCallsOnDuel[i].id == objId) {
        return i;
      }
    }
    return -1;
  }
}


