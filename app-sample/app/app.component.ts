import { Component, OnInit } from '@angular/core';

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
    `,
    styleUrls : ['./app.component.css']   
})

export class AppComponent {}