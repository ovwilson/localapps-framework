import { Component } from '@angular/core';

@Component({
    selector: 'my-sample',
    template: `
      <h1>Angular Router</h1>
      <nav>
        <a routerLink="/home" routerLinkActive="active">Home</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </nav>
      <router-outlet></router-outlet>
    `   
})

export class AppComponent {}