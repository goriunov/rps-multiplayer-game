import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GameFieldComponent} from "./game-field/game-field.component";


const routes: Routes = [
  {path: '' , component: GameFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class FrontEndRoutingModule { }
