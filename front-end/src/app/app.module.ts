import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlayersListComponent } from "./players-list/players-list.component";
import {GameBoardComponent} from "./game-board/game-board.component";
import {SocketService} from "./socket.service";


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    GameBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [ SocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
