
import { Component } from '@angular/core';
import { ConfigHttpService } from './config-http.service';
import { Config } from '../config/config';

@Component({
     template: 
     `<h1>Config-Http</h1> 
     <ul>    
     <li *ngFor="let configuration of configurations">id: {{configuration.id}}- name: {{configuration.name}}</li>
     </ul>
     `
})

export class ConfigHttpComponent {

  configurations: Config[];

  constructor(private configHttpService: ConfigHttpService) {}

   ngOnInit() {
      this.configHttpService.getConfig()
        .subscribe(configurations => this.configurations = configurations);
  }

}