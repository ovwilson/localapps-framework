import { Component, OnInit } from '@angular/core';
import './../public/styles.css';
import './../../common/rxjs-extensions';

@Component({
    selector: 'my-sample',
    template: `
      <h1>Angular Router</h1>
      <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
        <a routerLink="/form" routerLinkActive="active">Form</a>
        <a routerLink="/configmocks" routerLinkActive="active">Configuration-Mocks</a>
        <a routerLink="/confighttp" routerLinkActive="active">Configuration-Http</a>
      </nav>
      <router-outlet></router-outlet>
    `   
})

export class AppComponent {}