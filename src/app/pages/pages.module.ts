import { NgModule } from '@angular/core';
import {PagesRoutingModule} from "./pages-routing.module";
import {BasePageComponent} from "./base-page/base-page.component";

@NgModule({
  declarations: [BasePageComponent],
  imports: [
    PagesRoutingModule
  ],
})
export class PagesModule { }
