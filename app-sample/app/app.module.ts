import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { APPROUTING, APP_ROUTING_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';

import { ConfigMocksComponent } from './config-mocks/config-mocks.component';
import { ConfigMocksService } from './config-mocks/config-mocks.service';

import { ConfigHttpComponent } from './config-http/config-http.component';
import { ConfigHttpService } from './config-http/config-http.service';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './config/in-memory-data.service';

import { FormComponent } from './forms/forms.component';

@NgModule({
  imports: [ BrowserModule, APPROUTING, HttpModule, InMemoryWebApiModule.forRoot(InMemoryDataService) ],
  declarations : [ AppComponent, HomeComponent, AboutComponent, FormComponent, ConfigMocksComponent, ConfigHttpComponent ],
  providers: [ APP_ROUTING_PROVIDERS, HttpModule, ConfigMocksService, ConfigHttpService ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}


