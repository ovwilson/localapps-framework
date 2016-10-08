import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { Config }  from './../models/config';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class ConfigHttpService {
  
  private configUrl = 'config-http/configuration';  // URL to web API
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor (private http: Http) {}

  getConfigs (): Promise<Config[]> {
    return this.http.get(this.configUrl)
          .toPromise()
         .then(response => response.json().data as Config[])
         .catch(this.handleError);
  }  
  
  getConfig(id: number): Promise<Config> {
    return this.getConfigs()
      .then(configs => configs.find(config => config.id === id));
  }

  delete(id: number): Promise<void> {
    const url = `${this.configUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  create(name: string): Promise<Config> {
    return this.http
      .post(this.configUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  update(hero: Config): Promise<Config> {
    const url = `${this.configUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

//addConfig (name: string): Observable<Config> {
//    let body = JSON.stringify({ name });
//    let headers = new Headers({ 'Content-Type': 'application/json' });
//    let options = new RequestOptions({ headers: headers });

//    return this.http.post(this.configUrl, body, options)
//         .map(this.extractData)
  //       .catch(this.handleError);
 // }

  //private extractData(res: Response) {
  //  let body = res.json();
 //   return body.data || { };
 // }

//  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
//    let errMsg = (error.message) ? error.message :
//      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
//    console.error(errMsg); // log to console instead
//    return Observable.throw(errMsg);
//  }
}