import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { APPROUTING, APP_ROUTING_PROVIDERS } from './app.routes';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';
import { DocumentsComponent } from './documents/documents.component';

import { ConfigMocksComponent } from './config-mocks/config-mocks.component';
import { ConfigMocksService } from './config-mocks/config-mocks.service';

import { ConfigHttpComponent } from './config-http/config-http.component';
import { ConfigHttpService } from './config-http/config-http.service';

import { ConfigSearchService } from './search/search.service';
import { ConfigSearchComponent } from './search/search.component';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ConfigInMemoryData }  from './config-http/config-in-memory-data';

import { FormComponent } from './forms/forms.component';

@NgModule({
  imports: [ BrowserModule, APPROUTING, HttpModule, InMemoryWebApiModule.forRoot(ConfigInMemoryData), FormsModule ],
  declarations : [ AppComponent, HomeComponent, AboutComponent, FormComponent, DocumentsComponent, ConfigMocksComponent, ConfigHttpComponent, ConfigSearchComponent ],
  providers: [ APP_ROUTING_PROVIDERS, HttpModule, ConfigMocksService, ConfigHttpService, ConfigSearchService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}