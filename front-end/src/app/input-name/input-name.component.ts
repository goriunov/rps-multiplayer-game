import {Component, OnInit , trigger, state, animate, transition, style} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SocketService } from "../shared/socket.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-input-name',
  templateUrl: './input-name.component.html',
  styleUrls : ['./input-name.component.scss'],
  animations: [
    trigger('flyIn' , [
      state('*' , style({transform: 'scale(1.0)'})),
      transition('void => *' , [style({transform: 'scale(0.3)'}) , animate('0.3s ease-in')]),
    ]),
    trigger('drop' , [
      state('*' , style({transform: 'translateY(0)'})),
      transition('void => *' , [style({transform: 'translateY(-80px)'}) , animate('0.3s ease-in')]),
    ])
  ]
})

export class InputNameComponent implements OnInit{
  myForm: FormGroup;

  constructor( private socketService: SocketService,
               private router: Router){}

  ngOnInit(){
    this.myForm = new FormGroup({
      name: new FormControl('' , [Validators.required , this.onlySpacesValidator])
    });
    this.socketService.disconnection();
  }


  onSubmit(){
    this.socketService.setMyNameInGame(this.myForm.controls['name'].value);
    this.router.navigate(['/players-list']);
  }

  randomName(){
    this.socketService.setMyNameInGame('Player: '+Math.floor((Math.random() * 1000) + 1));
    this.router.navigate(['/players-list']);
  }


  onlySpacesValidator(control: FormControl) : {[s: string]: boolean}{
    if(/\S/.test(control.value)){
      return null;
    }else{
      return {name: true}
    }
  }

}

