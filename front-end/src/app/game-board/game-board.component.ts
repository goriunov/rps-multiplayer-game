import {Component, OnInit, NgZone} from '@angular/core';
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


  waiting:boolean = false;
  final:boolean = false;
  paper:boolean  =false;
  rock:boolean =false;
  scissors:boolean =false;
  opponentPaper:boolean =false;
  opponentRock:boolean =false;
  opponentScissors:boolean =false;



  constructor(private socketService: SocketService , private zone:NgZone){}


  ngOnInit(){
    this.sockets = this.socketService.getSocket();
    this.opponentId = this.socketService.getOpponentId();
    this.socketService.myID.subscribe(
      (id)=> this.myID = id);

    console.log(this.opponentId);

    this.sockets.on('final decision' , (result)=>{
      this.opponentDecision = result.opponentDecision;
      this.myDesition = result.myDecision;
      this.waiting = false;

      //Experimental logic
      if(this.opponentDecision == 'Rock' && this.myDesition == 'Paper'){
        this.final = true;
        this.paper = true;
        this.opponentRock = true;
        this.finalResult = 'You won';
      }else if (this.opponentDecision == 'Rock' && this.myDesition == 'Scissors'){
        this.final = true;
        this.scissors = true;
        this.opponentRock = true;
        this.finalResult = 'You lost';
      }else if (this.opponentDecision == 'Rock' && this.myDesition == 'Rock'){
        this.final = true;
        this.rock = true;
        this.opponentRock = true;
        this.finalResult = 'Draw';
      }

      if(this.opponentDecision == 'Paper' && this.myDesition == 'Paper'){
        this.final = true;
        this.paper = true;
        this.opponentPaper = true;
        this.finalResult = 'Draw';
      }else if (this.opponentDecision == 'Paper' && this.myDesition == 'Scissors'){
        this.final = true;
        this.scissors = true;
        this.opponentPaper = true;
        this.finalResult = 'You won';
      }else if (this.opponentDecision == 'Paper' && this.myDesition == 'Rock'){
        this.final = true;
        this.rock = true;
        this.opponentPaper = true;
        this.finalResult = 'You lost';
      }

      if(this.opponentDecision == 'Scissors' && this.myDesition == 'Paper'){
        this.final = true;
        this.paper = true;
        this.opponentScissors = true;
        this.finalResult = 'You lost';
      }else if (this.opponentDecision == 'Scissors' && this.myDesition == 'Scissors'){
        this.final = true;
        this.scissors = true;
        this.opponentScissors = true;
        this.finalResult = 'Draw';
      }else if (this.opponentDecision == 'Scissors' && this.myDesition == 'Rock'){
        this.final = true;
        this.rock = true;
        this.opponentScissors = true;
        this.finalResult = 'You won';
      }
    //  *************

      this.zone.run(()=>console.log('Done'));

    });
  }


  onDecision(decision){
    this.final = false;
    this.paper =false;
    this.rock=false;
    this.scissors=false;
    this.opponentPaper=false;
    this.opponentRock=false;
    this.opponentScissors=false;
    this.myDesition = '';
    this.finalResult = '';
    this.opponentDecision = '';
    this.sockets.emit('game decision' , {myID: this.myID , opponentID: this.opponentId , decision: decision});
    this.zone.run(()=>console.log('Done'));
  }

}
