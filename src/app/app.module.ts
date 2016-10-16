import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

import { APPROUTING, APP_ROUTING_PROVIDERS } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';

import { DocumentsComponent } from './documents/documents.component';
import { DocumentsService } from './documents/documents.service';

import { CommentsComponent } from './comments/comments.component';
import { CommentsService } from './comments/comments.service';

import { ConfigMocksComponent } from './config-mocks/config-mocks.component';
import { ConfigMocksService } from './config-mocks/config-mocks.service';

import { ConfigHttpComponent } from './config-http/config-http.component';
import { ConfigHttpService } from './config-http/config-http.service';

import { ConfigSearchService } from './search/search.service';
import { ConfigSearchComponent } from './search/search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryData } from './database/in-memory.data';
import { FormComponent } from './forms/forms.component';

import { Select2 } from "./directives/directives.select"

@NgModule({
  imports: [
    BrowserModule,
    APPROUTING,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryData),
    FormsModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FormComponent,
    DocumentsComponent,
    CommentsComponent,
    ConfigMocksComponent,
    ConfigHttpComponent,
    ConfigSearchComponent,
    Select2
  ],
  providers: [
    APP_ROUTING_PROVIDERS,
    HttpModule,
    ConfigMocksService,
    ConfigHttpService,
    ConfigSearchService,
    DocumentsService,
    CommentsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }