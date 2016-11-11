import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class RemoteService {

    globals: any;

    start() {

        let stream$ = new Observable((observer: any) => {
            let count = 0;
            let interval = setInterval(() => {
                observer.next(count++);
            }, 1000);

            return () => {
                console.log("disposing ...");
                clearInterval(interval);
            }

        });

        let subscriber = stream$.subscribe((value: any) => { console.log(value); });


        // dispose after awhile
        let stopInterval = setInterval(() => {

            // console.clear();
            this.globals = { title: "Observable Example" };
            console.log(this.globals);
            subscriber.unsubscribe();
        }, 5000);

        setTimeout(() => { clearInterval(stopInterval) }, 7000);

    }

}


