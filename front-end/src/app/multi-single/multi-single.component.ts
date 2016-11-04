import {Component, OnInit} from '@angular/core';
import {SocketService} from "../shared/socket.service";

@Component({
  selector: 'my-multi-single',
  templateUrl: './multi-single.component.html',
  styleUrls: ['./multi-single.component.scss']
})

export class MultiSingleComponent implements OnInit{

  constructor(private socketService: SocketService){}

  ngOnInit(){
    this.socketService.disconnection();
  }
}
