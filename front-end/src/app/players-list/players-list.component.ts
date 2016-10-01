import {Component, OnInit, OnDestroy ,Input} from '@angular/core';
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
  invitationList: boolean = false;
  allCallsOnDuel: number[] = [];
  opponentID: number;

  constructor( private router: Router , public socketService: SocketService){}

  sockets = this.socketService.getSocket();

  ngOnInit(){

    this.sockets.emit('on available');

    this.sockets.on('players in' , (available)=>{
      this.available_players = available;
    });


    // this.sockets.on('id' , (id)=>{
    //   this.myID = id;
    //   console.log(this.myID);
    // });

    this.socketService.myID.subscribe((id)=>{
      this.myID = id;
    });


    //If some one called you
    this.sockets.on('called on duel' , (opponentID) =>{
      this.allCallsOnDuel.push(opponentID);
    });

    //If you called some one
    this.sockets.on('accepted duel' , (id) => {
      this.opponentID = id;
      this.socketService.sendOpponentID(this.opponentID);
      this.sockets.emit('on unavailable' , this.myID);
      this.router.navigate(['/game']);
    })
  }


  decline(declinedId){
    this.allCallsOnDuel.splice(this.allCallsOnDuel.indexOf(declinedId) , 1);
    this.opponentID = null;
  }

  accept(acceptedId){
    this.opponentID = acceptedId;
    this.socketService.sendOpponentID(this.opponentID);
    this.sockets.emit('accepted duel' ,{whoIsAgree: this.myID , caller: this.opponentID});
    this.router.navigate(['/game']);
  }

  chooseOpponent(opponentID){
    this.sockets.emit('call duel' , {sender: this.myID , opponent: opponentID})
  }

  ngOnDestroy(){
    this.sockets.emit('on unavailable' , this.myID)
  }



}
