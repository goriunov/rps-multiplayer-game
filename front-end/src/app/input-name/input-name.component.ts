import {Component, OnInit , trigger, state, animate, transition, style} from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SocketService } from "../shared/socket.service";
import {Router, ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";

@Component({
  selector: 'my-input-name',
  templateUrl: './input-name.component.html',
  styleUrls : ['./input-name.component.scss'],
  animations: [
    trigger('flyIn' , [
      state('*' , style({transform: 'scale(1.0)'})),
      transition('void => *' , [style({transform: 'scale(0.6)'}) , animate('0.3s ease-in')]),
    ]),
    trigger('drop' , [
      state('*' , style({transform: 'translateY(0)'})),
      transition('void => *' , [style({transform: 'translateY(-60px)'}) , animate('0.3s ease-in')]),
    ])
  ]
})

export class InputNameComponent implements OnInit{
  myForm: FormGroup;
  label: string;

  constructor( private socketService: SocketService,
               private router: Router,
               private activatedRouter: ActivatedRoute){
    this.activatedRouter.params.subscribe(
      (param:any)=> this.label = param['label']
    );
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      name: new FormControl('' , [Validators.required , this.onlySpacesValidator])
    });
    this.socketService.disconnection();
  }


  onSubmit(){
    if(this.label == "Multi-payer Game") {
      this.socketService.setMyNameInGame(this.myForm.controls['name'].value);
      this.router.navigate(['/players-list']);
    }else{

    }
  }

  randomName(){
    if(this.label == "Multi-payer Game") {
      this.socketService.setMyNameInGame('Player: ' + Math.floor((Math.random() * 1000) + 1));
      this.router.navigate(['/players-list']);
    }else{

    }
  }


  onlySpacesValidator(control: FormControl) : {[s: string]: boolean}{
    if(/\S/.test(control.value)){
      return null;
    }else{
      return {name: true}
    }
  }

}

