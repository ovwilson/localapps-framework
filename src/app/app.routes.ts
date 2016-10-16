import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';
import { FormComponent } from './forms/forms.component';
import { ConfigMocksComponent } from './config-mocks/config-mocks.component';
import { ConfigHttpComponent } from './config-http/config-http.component';
import { ConfigSearchComponent } from './search/search.component';
import { Select2 } from "./directives/directives.select";


const APPRROUTES: Routes = [
  { path: './', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'configmocks', component: ConfigMocksComponent },
  { path: 'confighttp', component: ConfigHttpComponent },
  { path: 'search', component: ConfigSearchComponent },
  { path: 'form/:id', component: FormComponent },
  { path: 'select', component: Select2 },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTING_PROVIDERS: any[] = [];
export const APPROUTING: ModuleWithProviders = RouterModule.forRoot(APPRROUTES);