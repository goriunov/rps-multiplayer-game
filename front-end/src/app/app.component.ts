import {Component, OnInit} from '@angular/core';
import {SocketService} from "./socket.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app works!';

  constructor(public socketService : SocketService){}
  ngOnInit(){
    this.socketService.runSocket();
  }
}
