import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APPROUTING, APP_ROUTING_PROVIDERS } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';

@NgModule({
  imports: [ BrowserModule, APPROUTING ],
  declarations : [ AppComponent, HomeComponent, AboutComponent ],
  providers: [ APP_ROUTING_PROVIDERS ],
  bootstrap: [ AppComponent ]
})

export class AppModule {}


