import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './app.component.home';
import { AboutComponent } from './app.component.about';

const APPRROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }
];

export const APP_ROUTING_PROVIDERS: any[] = [];
export const APPROUTING: ModuleWithProviders = RouterModule.forRoot(APPRROUTES);