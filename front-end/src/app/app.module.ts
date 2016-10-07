import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";
import { PlayersListComponent } from "./players-list/players-list.component";
import {GameBoardComponent} from "./game-board/game-board.component";
import {SocketService} from "./socket.service";
import {InputNameComponent} from "./input-name/input-name.component";


@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    GameBoardComponent,
    InputNameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [ SocketService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
