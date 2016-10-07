import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersListComponent} from "./players-list/players-list.component";
import {GameBoardComponent} from "./game-board/game-board.component";
import {InputNameComponent} from "./input-name/input-name.component";

const routes: Routes = [
  {path: '' , component: InputNameComponent},
  {path: 'players-list' , component: PlayersListComponent},
  {path: 'game' , component: GameBoardComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }
