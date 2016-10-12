
import { Component } from '@angular/core';
import { ConfigMocksService } from './config-mocks.service';
import { Config } from './../models/config';

@Component({
     templateUrl: './config-mocks.html',
    styleUrls: [ './config-mocks.css' ],
})

export class ConfigMocksComponent {

  configurations: Config[];

  constructor(private configMocksService: ConfigMocksService) {}

   ngOnInit() {
      this.configurations = this.configMocksService.getConfig();
  }

}