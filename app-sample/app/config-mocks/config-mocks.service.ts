
import { Injectable } from '@angular/core';
import { ConfigMocks } from './config-mocks';

@Injectable()

export class ConfigMocksService {

    getConfig(){
        return ConfigMocks;
    }
 
}