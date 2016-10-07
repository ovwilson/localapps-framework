
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfigHttpService } from './config-http.service';
import { Config } from './../models/config';

@Component({
    templateUrl: './config-http.html',
    styleUrls: [ './config-http.css' ],
     providers : [ ConfigHttpService ]
})

export class ConfigHttpComponent implements OnInit {

  configurations: Config[];
  selectedConfig: Config;

  constructor(private configHttpService: ConfigHttpService, private router: Router) {}

   ngOnInit() {
      this.getConfigs();
  }
  
  getConfigs(): void {
    this.configHttpService
        .getConfigs()
        .then(configurations => this.configurations = configurations);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.configHttpService.create(name)
      .then(config => {
        this.configurations.push(config);
        this.selectedConfig = null;
      });
  }
  delete(config: Config): void {
    this.configHttpService
        .delete(config.id)
        .then(() => {
          this.configurations = this.configurations.filter(h => h !== config);
          if (this.selectedConfig === config) { this.selectedConfig = null; }
        });
  }

  onSelect(config: Config): void {
    this.selectedConfig = config;
    console.log('Selected: ' + this.selectedConfig);
  }
  gotoDetail(): void {
    this.router.navigate(['/form', this.selectedConfig.id]);
  }

}