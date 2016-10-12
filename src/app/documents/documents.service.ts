
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Document } from './../models/document';

@Injectable()

export class DocumentsService {

  private documentUrl = 'database/documents';
  
  constructor(private http: Http) { }

  getDocuments(): Promise<Document[]> {
    return this.http.get(this.documentUrl)
      .toPromise()
      .then(response => response.json().data as Document[])
      .catch(this.handleError);
  }

  getDocumentsById(id: number): Promise<Document[]> {
    var url : string = this.documentUrl+`/?id=^${id}$`;
    console.log(url); 
    return this.http.get(url)
      .toPromise().then(response => response.json().data as Document[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}