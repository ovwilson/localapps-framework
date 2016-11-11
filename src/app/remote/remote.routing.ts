import { Routes } from "@angular/router";
import { RemoteComponent } from "./remote.component";

export const APPRROUTES: Routes = [
  { path: "", component: RemoteComponent },
  { path: "remote", component: RemoteComponent },
  { path: "**", component: RemoteComponent }
];
