import {Component , OnInit} from '@angular/core';

import 'rxjs/Rx';

declare var io : any;

@Component({
  selector: 'my-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})



export class GameFieldComponent implements OnInit{
  socket = io.connect('/');

  playersChose: string[] = [];
  players: number[] = [];


  ngOnInit(){
    localStorage.clear();

    this.socket.on('newClient' , (id) =>{
      localStorage.setItem('playerID', id);
    });

    this.socket.on('all-users' , (users)=>{
      this.players = users;
      console.log(users);
      console.log(this.players);
    });

    this.socket.on('chose', (chose) => {
        console.log('got it');
        this.playersChose.push(chose);
      });

    this.socket.on('opponentID' , function(id){
      localStorage.setItem('opponentID' , id);
    });
  }




  chooseOpponent(id){
    localStorage.setItem('opponentID' , id);
    this.socket.emit( 'opponentID', { receiver: localStorage.getItem('opponentID') , opponentID :localStorage.getItem('playerID')});
  }


  onRock(){
    this.socket.emit('chose' , {chose: 'Rock' , playerID: localStorage.getItem('playerID') ,opponentID : localStorage.getItem('opponentID')});
  }

  onScissors(){
    this.socket.emit('chose' ,  {chose: 'scissors' , playerID: localStorage.getItem('playerID') ,opponentID : localStorage.getItem('opponentID')});
  }

  onPaper(){
    this.socket.emit('chose' ,{chose: 'paper' ,playerID: localStorage.getItem('playerID') ,opponentID : localStorage.getItem('opponentID')});
  }


}
