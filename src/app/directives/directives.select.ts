import {Component, OnInit, ElementRef } from "@angular/core";

declare var $: any;

@Component({
    template:`
    <div class="container-fluid">
	<select class="js-example">
  <option value="AL">Alabama</option>
  <option value="WY">Wyoming</option>
</select>
    `
})
export class Select2 implements OnInit {

    constructor(private el: ElementRef) {
    }

    public ngOnInit() {
        $(this.el.nativeElement).find(".js-example").select2();
    }
}