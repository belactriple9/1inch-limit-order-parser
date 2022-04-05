import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TuiRootModule} from "@taiga-ui/core";
import {TuiTabsModule} from "@taiga-ui/kit";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    TuiTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
