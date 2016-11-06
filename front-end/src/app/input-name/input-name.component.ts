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
  subTitle: string;

  constructor( private socketService: SocketService,
               private router: Router,
               private activatedRouter: ActivatedRoute){
    this.activatedRouter.params.subscribe(
      (param:any)=> {
        this.label = param['label'];
        if(this.label == "multi-player"){
          this.subTitle = "Multi-player Game";
        }else{
          this.subTitle = "Single-player Game";
        }
      }
    );
  }

  ngOnInit(){
    this.myForm = new FormGroup({
      name: new FormControl('' , [Validators.required , this.onlySpacesValidator])
    });
    this.socketService.disconnection();
  }


  onSubmit(){
    this.socketService.setMyNameInGame(this.myForm.controls['name'].value);
    if(this.label == "multi-player") {
      this.router.navigate(['/players-list']);
    }else{
      this.router.navigate(['/game' , 'single-player']);
    }
  }

  randomName(){
    this.socketService.setMyNameInGame('Player: ' + Math.floor((Math.random() * 1000) + 1));
    if(this.label == "multi-player") {
      this.router.navigate(['/players-list']);
    }else{
      this.router.navigate(['/game' , 'single-player']);
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

