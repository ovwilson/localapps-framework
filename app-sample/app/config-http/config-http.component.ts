
import { Component, OnInit } from '@angular/core';
import { ConfigHttpService } from './config-http.service';
import { Config } from './../models/config';

@Component({
     template: 
     `<h1>Config-Http</h1> 
     <ul>    
     <li *ngFor="let configuration of configurations">id: {{configuration.id}}- name: {{configuration.name}}</li>
     </ul>
     `,
     providers : [ ConfigHttpService ]
})

export class ConfigHttpComponent implements OnInit {

  configurations: Config[];
  errorMessage : string;
  mode = 'Observable';

  constructor(private configHttpService: ConfigHttpService) {}

   ngOnInit() {
      this.getConfig();
  }

   getConfig() {
    this.configHttpService.getConfig()
                     .subscribe(
                       configurations => this.configurations = configurations,
                       error =>  this.errorMessage = <any>error);
  }

}