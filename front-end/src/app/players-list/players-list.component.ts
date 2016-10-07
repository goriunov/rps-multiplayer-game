import {Component, OnInit, OnDestroy , NgZone} from '@angular/core';
import {Router} from "@angular/router";
import {SocketService} from "../socket.service";
import {UserInformation} from "./userInformation";


@Component({
  selector: 'my-player-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['players-list.component.scss']
})

export class PlayersListComponent implements OnInit , OnDestroy{
  available_players: UserInformation[] = [];
  myID: number;
  myName: string;
  invitationList: boolean = false;
  allCallsOnDuel: UserInformation[] = [];
  opponentID: number;
  invaitedPeople: number[] = [];

  constructor( private router: Router , public socketService: SocketService , private zone:NgZone){}

  sockets: any;

  ngOnInit(){
    this.socketService.runSocket();

    this.sockets = this.socketService.getSocket();

    this.sockets.emit('on available');

    this.sockets.on('players in' , (available)=>{
      this.available_players = available;
      this.zone.run(()=>console.log('Done'));
    });


    this.socketService.myID.subscribe((id)=>{
      this.myID = id;
    });

    this.socketService.myName.subscribe((name)=>{
      this.myName = name;
    });


    //If some one called you
    this.sockets.on('called on duel' , (opponent) =>{
      console.log('got duel');
      let caller : UserInformation = new UserInformation( opponent.name , opponent.id );
      // this.allCallsOnDuel = [...this.allCallsOnDuel, caller];
      this.allCallsOnDuel.push(caller);
      this.zone.run(()=>console.log('Done'));

    });

    //If you called some one
    this.sockets.on('accepted duel' , (id) => {
      this.opponentID = id;
      this.socketService.sendOpponentID(this.opponentID);
      this.sockets.emit('on unavailable' , this.myID);
      this.router.navigate(['/game']);
    });

    this.sockets.on('declined duel' , (id)=>{
      this.invaitedPeople.splice(this.invaitedPeople.indexOf(id) , 1);
      this.zone.run(()=>console.log('Done'));
    });
  }


  decline(declinedUser){
    this.sockets.emit('decline duel' , {myID: this.myID , receiver: declinedUser.id});
    this.allCallsOnDuel.splice(this.myIndexOf(declinedUser) , 1);
  }



  accept(acceptedId){
    this.opponentID = acceptedId;
    this.socketService.sendOpponentID(this.opponentID);
    this.sockets.emit('accepted duel' ,{whoIsAgree: this.myID , caller: this.opponentID});
    this.router.navigate(['/game']);
  }

  chooseOpponent(opponentID){
    console.log('Send');
    let permitToInvite:boolean = false;

    if (this.invaitedPeople.indexOf(opponentID) == -1) {
      permitToInvite = true;
    }

    if(permitToInvite) {
      this.sockets.emit('call duel', {senderID: this.myID  ,senderName: this.myName, opponent: opponentID});
      this.invaitedPeople.push(opponentID);
    }

  }

  ngOnDestroy(){
    this.sockets.emit('on unavailable' , this.myID)
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


