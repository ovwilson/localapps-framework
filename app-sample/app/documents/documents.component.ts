import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Config } from './../models/config';

import { DocumentsService } from './documents.service';
import { Document } from './../models/document';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css'],
  providers: [ DocumentsService ]
})

export class DocumentsComponent {

  @Input('selectedConfig') selectedConfig: Config;

  documents: Document[];
 
  constructor(private documentsService: DocumentsService) { }

  ngOnInit(): void {
    this.getDocuments();
  }

  getDocuments(): void {
    this.documentsService.getDocumentsById(this.selectedConfig.id)
     .then(documents => this.documents.push(documents) );
  }

}
