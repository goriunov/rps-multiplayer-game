import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FrontEndRoutingModule } from "./app-routing.module";
import { GameFieldComponent } from "./game-field/game-field.component";

@NgModule({
  declarations: [
    AppComponent,
    GameFieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FrontEndRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
