import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { APPRROUTES } from './app.routes';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './database/in-memory.data';

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { RemoteModule } from "./remote/remote.module";

import { MaterialModule } from '@angular/material';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APPRROUTES),
    HttpModule,
    RemoteModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryData)    
  ],
  declarations: [
    AppComponent,
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }