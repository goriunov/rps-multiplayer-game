import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { SocketService } from "../shared/socket.service";
import { Router } from "@angular/router";

@Component({
  selector: 'my-input-name',
  templateUrl: './input-name.component.html',
  styleUrls : ['./input-name.component.scss']
})

export class InputNameComponent implements OnInit {
  myForm: FormGroup;

  constructor( private socketService: SocketService,
               private router: Router){}


  ngOnInit(){
    this.myForm = new FormGroup({
      name: new FormControl('' , [Validators.required , this.onlySpacesValidator])
    });
  }


  onSubmit(){
    this.socketService.setMyNameInGame(this.myForm.controls['name'].value);
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

