import {Component , OnInit} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

declare var io : any;

@Component({
  selector: 'my-game-field',
  templateUrl: './game-field.component.html',
  styleUrls: ['./game-field.component.scss']
})



export class GameFieldComponent implements OnInit{
  socket = io.connect('http://localhost:3001');
  playersChose =[];


  ngOnInit(){
    this.socket.on('connect', function(data) {

    });

      this.socket.on('chose', (chose) => {
        console.log('got it');
        this.playersChose.push(chose);
      });

  }

  onRock(){
    this.socket.emit('chose' , 'rock');
  }

  onScissors(){
    this.socket.emit('chose' , 'scissors');
  }

  onPaper(){
    this.socket.emit('chose' , 'paper');
  }


}
