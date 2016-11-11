import { Component, OnInit } from "@angular/core";
import { NavbarComponent } from "./navbar/navbar.component";

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
        
    }

}