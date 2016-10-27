import { NgModule, OnInit } from "@angular/core";
import { Component } from '@angular/core';
import { NavbarComponent } from "./navbar/navbar.component";
import { Observable } from 'rxjs';

import "../../public/styles.css";
import "../rxjs-extensions";

@Component({
    selector: "body",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {

    globals: any;

    ngOnInit() {

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

        setTimeout(()=> {clearInterval(stopInterval)},7000)
    }

}