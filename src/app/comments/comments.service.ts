
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { Comment } from './../models/comment';

@Injectable()

export class CommentsService {

  private commentUrl = 'database/comments';
  
  constructor(private http: Http) { }

  getComments(): Promise<Comment[]> {
    return this.http.get(this.commentUrl)
      .toPromise()
      .then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  getCommentsById(id: number): Promise<Comment[]> {
    var url : string = this.commentUrl+`/?id=^${id}$`;
    console.log(url); 
    return this.http.get(url)
      .toPromise().then(response => response.json().data as Comment[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}