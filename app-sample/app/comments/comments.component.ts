import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Config } from './../models/config';

import { CommentsService } from './comments.service';
import { Comment } from './../models/comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css'],
  providers: [ CommentsService ]
})

export class CommentsComponent {

  @Input('selectedConfig') selectedConfig: Config;

  comments: Comment[];
  
  constructor(private commentsService: CommentsService) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    console.log(this.selectedConfig.id);
    this.commentsService.getCommentsById(this.selectedConfig.id)
    .then(comments => this.comments = comments );
  }

}
