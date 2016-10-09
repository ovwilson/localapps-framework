
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { Config } from './../models/config';

@Injectable()

export class ConfigSearchService {

  constructor(private http: Http) { }

  search(term: string): Observable<Config[]> {
    return this.http
      .get(`datatbase/configuration/?name=${term}`)
      .map((response: Response) => response.json().data as Config[]);
  }
}