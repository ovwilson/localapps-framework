import { NgModule } from "@angular/core";
import { Component } from '@angular/core';
import { SideNavComponent } from "./sidenav/sidenav.component";
import { NavbarComponent } from "./navbar/navbar.component";

import "../../public/styles.css";
import "../rxjs-extensions";

@Component({
    selector: "body",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"]
})

export class AppComponent {}