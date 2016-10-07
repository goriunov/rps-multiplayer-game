import {Component, OnInit, NgZone, OnDestroy, ChangeDetectorRef} from '@angular/core';
import {SocketService} from "../socket.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-game-board',
  templateUrl:'./game-board.component.html',
  styleUrls:['./game-board.component.scss']

})

export class GameBoardComponent implements OnInit,OnDestroy{
  sockets : any;
  opponentId : number;
  myID: number;
  myName: string ='';
  opponentName: string ='';
  myDesition: string;
  opponentDecision: string;
  finalResult: string;
  opponentScore : number =0;
  myScore : number = 0;



  waiting:boolean = false;
  waitingReplay: boolean = false;
  final:boolean = false;
  paper:boolean  =false;
  rock:boolean =false;
  scissors:boolean =false;
  opponentPaper:boolean =false;
  opponentRock:boolean =false;
  opponentScissors:boolean =false;
  timing : number = 30;
  opponentWaiting : boolean = false;
  timer: any;
  interval: any;


  constructor(private socketService: SocketService , private ref: ChangeDetectorRef , private zone:NgZone , private router:Router){}


  ngOnInit(){
    this.myName = this.socketService.returnMyName();
    this.opponentName = this.socketService.returnOpponentName();
    this.sockets = this.socketService.getSocket();
    this.opponentId = this.socketService.getOpponentId();
    this.socketService.myID.subscribe(
      (id)=> this.myID = id);

    this.sockets.on('waiting'  , ()=>{

        if (!this.final) {
          this.opponentWaiting = true;
          this.timer = setTimeout(()=> {
            if (this.opponentWaiting == true) {
              this.router.navigate(['/']);
            }
          }, 30000);

          this.interval = setInterval(()=> {
            this.timing = this.timing - 1;
            this.ref.detectChanges()
          }, 1000)
        }

    });

    this.sockets.on('final decision' , (result)=>{
      if(this.interval){
       clearInterval(this.interval);
        this.timing = 30;

      }      if(this.timer){
        clearTimeout(this.timer);
      }
      this.opponentWaiting = false;
      this.opponentDecision = result.opponentDecision;
      this.myDesition = result.myDecision;
      this.waiting = false;

      //Experimental logic
      if(this.opponentDecision == 'Rock' && this.myDesition == 'Paper'){
        this.myScore = this.myScore + 1;
        this.final = true;
        this.paper = true;
        this.opponentRock = true;
        this.finalResult = 'You won';
      }else if (this.opponentDecision == 'Rock' && this.myDesition == 'Scissors'){
        this.opponentScore = this.opponentScore + 1;
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
        this.myScore = this.myScore + 1;
        this.final = true;
        this.scissors = true;
        this.opponentPaper = true;
        this.finalResult = 'You won';
      }else if (this.opponentDecision == 'Paper' && this.myDesition == 'Rock'){
        this.opponentScore = this.opponentScore + 1;
        this.final = true;
        this.rock = true;
        this.opponentPaper = true;
        this.finalResult = 'You lost';
      }

      if(this.opponentDecision == 'Scissors' && this.myDesition == 'Paper'){
        this.opponentScore = this.opponentScore + 1;
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
        this.myScore = this.myScore + 1;
        this.final = true;
        this.rock = true;
        this.opponentScissors = true;
        this.finalResult = 'You won';
      }
    //  *************

      this.ref.detectChanges()

    });

    this.sockets.on('leaved' , ()=>{
      this.finalResult = 'Your opponent left the game';
      this.final = true;

      this.ref.detectChanges()

    });

    this.sockets.on('replay' , ()=>{
      this.final = false;
      this.waitingReplay = false;
      this.ref.detectChanges()
    })
  }


  onDecision(decision){
    this.final = false;
    this.paper =false;
    this.rock = false;
    this.scissors = false;
    this.opponentPaper = false;
    this.opponentRock = false;
    this.opponentScissors = false;
    this.myDesition = '';
    this.finalResult = '';
    this.opponentDecision = '';
    this.sockets.emit('waiting' , this.opponentId);
    this.sockets.emit('game decision' , {myID: this.myID , opponentID: this.opponentId , decision: decision});

    this.ref.detectChanges()
  }


  replay(){
    this.waitingReplay = true;
    this.sockets.emit('replay' , {myID: this.myID , opponentID: this.opponentId});

  }


  ngOnDestroy(){
    this.sockets.emit('leaved' , {opponentID: this.opponentId})
  }


}
