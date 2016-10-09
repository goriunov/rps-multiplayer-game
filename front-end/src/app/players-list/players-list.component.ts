import { Component, OnInit, OnDestroy , NgZone } from '@angular/core';
import { Router } from "@angular/router";
import { SocketService } from "../shared/socket.service";
import { UserInformation } from "./userInformation";

@Component({
  selector: 'my-player-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['players-list.component.scss']
})

export class PlayersListComponent implements OnInit, OnDestroy{
  availablePlayers: UserInformation[] = [];

  allCallsOnDuel: UserInformation[] = [];
  invitedPeople: number[] = [];
  invitationListOpened: boolean = false;

  myID: number;
  myName: string;
  opponentID: number;

  socket: any;

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
    });

    this.socket.on('called on duel' , (opponent) =>{
      let caller : UserInformation = new UserInformation( opponent.name , opponent.id );
      this.allCallsOnDuel.push(caller);
      this.zone.run(()=>{});
    });

    this.socket.on('duel accepted' , (opponent) =>{
      this.opponentID = opponent.id;
      this.socketService.setOpponentName(opponent.name);
      this.socketService.setOpponentID(this.opponentID);
      this.socket.emit('unavailable' , this.myID);
      this.router.navigate(['/game']);
    });

    this.socket.on('duel declined' , (id) =>{
      this.invitedPeople.splice(this.invitedPeople.indexOf(id) , 1);
      this.zone.run(()=>{});
    });
  }


  decline(declinedUser){
    this.socket.emit('decline duel' , {myID: this.myID , receiver: declinedUser.id});
    this.allCallsOnDuel.splice(this.myIndexOf(declinedUser) , 1);
  }


  accept(acceptedId  , name){
    this.opponentID = acceptedId;
    this.socketService.setOpponentName(name);
    this.socketService.setOpponentID(this.opponentID);
    this.socket.emit('accept duel' ,{consentient: this.myID , caller: this.opponentID});
    this.router.navigate(['/game']);
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
  }


  myIndexOf(obj) {
    for (var i = 0; i < this.allCallsOnDuel.length; i++) {
      if (this.allCallsOnDuel[i].name == obj.name && this.allCallsOnDuel[i].id == obj.id) {
        return i;
      }
    }
    return -1;
  }

}


