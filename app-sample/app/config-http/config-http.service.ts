import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Config } from '../config/config';
import 'rxjs/add/operator/map';

@Injectable()

export class ConfigHttpService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private configUrl = 'app/config-http/config-http.json';  // URL to web api

  constructor(private http: Http) { }

  getConfig() {
    return this.http.get(this.configUrl)
     .map(response => <Config[]>response.json().data ); 
  }
  
}