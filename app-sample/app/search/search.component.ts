import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import { ConfigSearchService } from './search.service';
import { Config } from './../models/config';

@Component({
  templateUrl: './search.config.html',
  styleUrls: [ './search.config.css' ],
  providers: [ ConfigSearchService ]
})

export class ConfigSearchComponent implements OnInit {
  
  configurations: Observable<Config[]>;
  private searchTerms = new Subject<string>();
  
  constructor(private configSearchService: ConfigSearchService, private router: Router) {}

  // Push a search term into the observable stream.
  search(term: string): void {
        this.searchTerms.next(term); 
  }

  ngOnInit(): void {
    this.configurations = this.searchTerms
      .debounceTime(300)        // wait for 300ms pause in events
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => term   // switch to new observable each time
        // return the http search observable
        ? this.configSearchService.search(term)
        // or the observable of empty heroes if no search term
        : Observable.of<Config[]>([]))
      .catch(error => {
        // TODO: real error handling
        console.log(error);
        return Observable.of<Config[]>([]);
      });
  }

  gotoDetail(config: Config): void {
    let link = ['/form', config.id];
    this.router.navigate(link);
  }

}