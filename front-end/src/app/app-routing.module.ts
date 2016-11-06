import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayersListComponent } from "./players-list/players-list.component";
import { GameBoardComponent } from "./game-board/game-board.component";
import { InputNameComponent } from "./input-name/input-name.component";
import { MultiSingleComponent } from "./multi-single/multi-single.component";

const routes: Routes = [
  {path: '' , component: MultiSingleComponent},
  {path: 'name/:label' , component: InputNameComponent},
  {path: 'players-list' , component: PlayersListComponent},
  {path: 'game/:game-type' , component: GameBoardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
