import {Component , HostListener} from '@angular/core';
import {SocketService} from "./shared/socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  constructor( private socketService:SocketService){}

  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHander(event) {
    this.socketService.disconnection();
  }
}
