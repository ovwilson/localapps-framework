
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from './../models/config';

@Injectable()

export class ConfigSearchService {
  constructor(private http: Http) {}
  search(term: string): Observable<Config[]> {
    console.log('searching...');
    return this.http
        .get(`config-http/configuration/?name=${term}`)
        .map((r: Response) => r.json().data as Config[]);
  }
}

