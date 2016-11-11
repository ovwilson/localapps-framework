import { NgModule }       from '@angular/core';
import { RouterModule }   from '@angular/router';
import { RemoteComponent } from './remote.component';
import { APPRROUTES } from "./remote.routing";

@NgModule({
  imports: [
    RouterModule.forChild(APPRROUTES)
  ],
  declarations :[
    RemoteComponent
  ],
  exports: [
    RouterModule
  ]
})
export class RemoteModule {}