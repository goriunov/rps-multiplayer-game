import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlayersListComponent } from "./players-list/players-list.component";
import { GameBoardComponent } from "./game-board/game-board.component";
import { SocketService } from "./shared/socket.service";
import { InputNameComponent } from "./input-name/input-name.component";
import {MultiSingleComponent} from "./multi-single/multi-single.component";


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    GameBoardComponent,
    InputNameComponent,
    MultiSingleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [ SocketService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}
