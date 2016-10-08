import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Location } from '@angular/common';
import { Config } from './../models/config';
import { DocumentsComponent } from './../documents/documents.component';
import { ConfigHttpService } from './../config-http/config-http.service';

@Component({
    templateUrl: './forms.html'
})

export class FormComponent implements OnInit {

    config: Config;
    
    constructor(private configHttpService: ConfigHttpService, private route: ActivatedRoute, private location: Location) { }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.configHttpService.getConfig(id)
                .then(config => this.config = config);
        });
    }

    save(): void {
        this.configHttpService.update(this.config)
            .then(() => this.goBack());
    }

    goBack(): void {
        this.location.back();
    }

}