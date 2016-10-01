import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersListComponent} from "./players-list/players-list.component";
import {GameBoardComponent} from "./game-board/game-board.component";

const routes: Routes = [
  // {path: '' , component: GameBoardComponent},
  {path: '' , component: PlayersListComponent},
  {path: 'game' , component: GameBoardComponent}

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})


export class AppRoutingModule { }
