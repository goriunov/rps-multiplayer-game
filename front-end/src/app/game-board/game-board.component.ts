import {Component, OnInit} from '@angular/core';
import {SocketService} from "../socket.service";

@Component({
  selector: 'my-game-board',
  templateUrl:'./game-board.component.html',
  styleUrls:['./game-board.component.scss']

})

export class GameBoardComponent implements OnInit{
  sockets : any;
  opponentId : number;
  myID: number;
  myDesition: string;
  opponentDecision: string;
  finalResult: string;

  constructor(private socketService: SocketService){}


  ngOnInit(){
    this.sockets = this.socketService.getSocket();
    this.opponentId = this.socketService.getOpponentId();
    this.socketService.myID.subscribe(
      (id)=> this.myID = id);

    console.log(this.opponentId);

    this.sockets.on('final decision' , (result)=>{
      this.opponentDecision = result.opponentDecision;
      this.myDesition = result.myDecision;

      //Experimental logic
      if(this.opponentDecision == 'Rock' && this.myDesition == 'Paper'){
        this.finalResult = 'You won';
      }else if (this.opponentDecision == 'Rock' && this.myDesition == 'Scissors'){
        this.finalResult = 'You lost';
      }else if (this.opponentDecision == 'Rock' && this.myDesition == 'Rock'){
        this.finalResult = 'It is draw';
      }

      if(this.opponentDecision == 'Paper' && this.myDesition == 'Paper'){
        this.finalResult = 'It is draw';
      }else if (this.opponentDecision == 'Paper' && this.myDesition == 'Scissors'){
        this.finalResult = 'You lost';
      }else if (this.opponentDecision == 'Paper' && this.myDesition == 'Rock'){
        this.finalResult = 'You won';
      }

      if(this.opponentDecision == 'Scissors' && this.myDesition == 'Paper'){
        this.finalResult = 'You lost';
      }else if (this.opponentDecision == 'Scissors' && this.myDesition == 'Scissors'){
        this.finalResult = 'It is draw';
      }else if (this.opponentDecision == 'Scissors' && this.myDesition == 'Rock'){
        this.finalResult = 'You won';
      }

    //  *************

    });
  }


  onDecision(decision){
    this.sockets.emit('game decision' , {myID: this.myID , opponentID: this.opponentId , decision: decision});
  }

}
