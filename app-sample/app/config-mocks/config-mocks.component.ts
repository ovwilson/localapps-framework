
import { Component } from '@angular/core';
import { ConfigMocksService } from './config-mocks.service';
import { Config } from './../models/config';

@Component({
     template: 
     `<h1>Config-Mocks</h1> 
     <ul>    
     <li *ngFor="let configuration of configurations">id: {{configuration.id}}- name: {{configuration.name}}</li>
     </ul>
     `
})

export class ConfigMocksComponent {

  configurations: Config[];

  constructor(private configMocksService: ConfigMocksService) {}

   ngOnInit() {
      this.configurations = this.configMocksService.getConfig();
  }

}