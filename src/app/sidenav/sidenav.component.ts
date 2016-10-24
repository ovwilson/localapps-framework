import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
    selector: 'sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css']
})

export class SideNavComponent implements OnInit {

    ngOnInit(): void {

        // SideNav Options
        // $('.button-collapse').sideNav({
         //   edge: 'right', // Choose the horizontal origin
       //     closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
       // });


    }


}
