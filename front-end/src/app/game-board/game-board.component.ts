import { Component, OnInit, NgZone, OnDestroy , trigger, state, animate, transition, style } from '@angular/core';
import { SocketService } from "../shared/socket.service";
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'my-game-board',
  templateUrl:'./game-board.component.html',
  styleUrls:['./game-board.component.scss'],
  animations: [
    trigger('flyIn' , [
      state('*'  , style({transform:'translate(0)'})),
      transition('void => left' , [style({ transform: 'translateX(-70%)'}) , animate(300)]),
      transition('void => right' , [style({ transform: 'translateX(70%)'}) , animate(300)]),
      transition('void => bottom' , [style({ transform: 'translateY(70%)'}) , animate(300)]),
      transition('void => result' , [style({ transform: 'translateY(-100%)'}) , animate(300)])
    ])
  ]

})

export class GameBoardComponent implements OnInit,OnDestroy{
  socket: any;

  opponentId: number;
  opponentName: string ='';
  opponentDecision: string;
  opponentScore: number =0;

  myID: number;
  myName: string ='';
  myDecision: string;
  myScore: number = 0;

  waitingForOpponent:boolean = false;
  waitingReplay: boolean = false;
  opponentIsWaiting : boolean = false;

  final:boolean = false;
  finalResult: string;

  timing : number = 30;
  timer: any;
  interval: any;
  gameType: string;

  constructor(private socketService: SocketService,
              private zone:NgZone,
              private router:Router,
              private activatedRoute: ActivatedRoute){
    this.activatedRoute.params.subscribe(
      (param: any)=> this.gameType = param['game-type']
    );
  }

  ngOnInit(){
    if(this.gameType == 'multi-player') {
      this.socket = this.socketService.returnSocket();
      this.opponentName = this.socketService.returnOpponentName();
      this.opponentId = this.socketService.returnOpponentId();
      this.myName = this.socketService.returnMyName();
      this.socketService.myID.subscribe((id)=> this.myID = id);

      this.socket.on('disconnect', ()=> {
        console.log('You are not online !');
        this.router.navigate(['/']);
      });

      this.socket.on('final decision', (result) => {
        this.opponentIsWaiting = false;
        this.waitingForOpponent = false;
        this.opponentDecision = result.opponentDecision;
        this.myDecision = result.myDecision;

        if (this.interval) {
          clearInterval(this.interval);
          this.timing = 30;
        }

        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.gameResultFunc();
      });

      this.socket.on('waiting', () => {
        if (!this.final) {
          this.waitingForOpponent = false;
          this.opponentIsWaiting = true;
          if (this.timer) {
            clearTimeout(this.timer);
          }
          if (this.interval) {
            clearInterval(this.interval);
            this.timing = 30;
          }
          this.timer = setTimeout(()=> {
            if (this.opponentIsWaiting == true) {
              this.router.navigate(['/']);
            }
          }, 30000);

          this.interval = setInterval(() => {
            this.timing = this.timing - 1;
            this.zone.run(() => {
            });
          }, 1000);
        }
      });

      this.socket.on('left', ()=> {
        this.finalResult = 'Your opponent left the game';
        this.final = true;
        this.zone.run(()=> {
        });
      });

      this.socket.on('replay', ()=> {
        this.replayFunc();
      })
    }else{
      this.opponentName = 'Computer';
      this.myName = this.socketService.returnMyName();
    }
  }

  onDecision(decision){
    if(this.gameType == 'multi-player') {
      if (!this.opponentIsWaiting) {
        this.waitingForOpponent = true;
        this.socket.emit('waiting', this.opponentId);
      }
      this.socket.emit('game decision', {myID: this.myID, opponentID: this.opponentId, decision: decision});
      this.zone.run(()=> {});
    }else{
      this.myDecision = decision;
      let computer = Math.random();
      if(computer < 0.33){
        this.opponentDecision = 'Paper';
      }else if(computer > 0.33 && computer < 0.66){
        this.opponentDecision = 'Rock';
      }else{
        this.opponentDecision = 'Scissors';
      }
      this.gameResultFunc();
    }
  }

  replay(){
    if(this.gameType =='multi-player') {
      this.waitingReplay = true;
      this.socket.emit('replay', {myID: this.myID, opponentID: this.opponentId});
    }else{
      this.replayFunc();
    }
  }

  navigateAway(){
    if(this.gameType =='multi-player'){
      this.router.navigate(['/players-list']);
    }else{
      this.router.navigate(['/']);
    }
  }

  ngOnDestroy(){
    if(this.gameType =='multi-player') {
      this.socket.emit('left', {opponentID: this.opponentId});
      this.socket.emit('unavailable', this.myID);
    }
  }


  replayFunc(){
    this.final = false;
    this.myDecision = '';
    this.finalResult = '';
    this.opponentDecision = '';
    this.waitingReplay = false;
    this.zone.run(()=> {
    });
  }

  gameResultFunc(){
    if(this.opponentDecision == 'Rock' && this.myDecision == 'Paper'){
      this.myScore = this.myScore + 1;
      this.final = true;
      this.finalResult = 'You won';
    }else if (this.opponentDecision == 'Rock' && this.myDecision == 'Scissors'){
      this.opponentScore = this.opponentScore + 1;
      this.final = true;
      this.finalResult = 'You lost';
    }else if (this.opponentDecision == 'Rock' && this.myDecision == 'Rock'){
      this.final = true;
      this.finalResult = 'Draw';
    }

    if(this.opponentDecision == 'Paper' && this.myDecision == 'Paper'){
      this.final = true;
      this.finalResult = 'Draw';
    }else if (this.opponentDecision == 'Paper' && this.myDecision == 'Scissors'){
      this.myScore = this.myScore + 1;
      this.final = true;
      this.finalResult = 'You won';
    }else if (this.opponentDecision == 'Paper' && this.myDecision == 'Rock'){
      this.opponentScore = this.opponentScore + 1;
      this.final = true;
      this.finalResult = 'You lost';
    }

    if(this.opponentDecision == 'Scissors' && this.myDecision == 'Paper'){
      this.opponentScore = this.opponentScore + 1;
      this.final = true;
      this.finalResult = 'You lost';
    }else if (this.opponentDecision == 'Scissors' && this.myDecision == 'Scissors'){
      this.final = true;
      this.finalResult = 'Draw';
    }else if (this.opponentDecision == 'Scissors' && this.myDecision == 'Rock'){
      this.myScore = this.myScore + 1;
      this.final = true;
      this.finalResult = 'You won';
    }
    this.zone.run(()=> {
      console.log('DOne')
    });
  }
}
