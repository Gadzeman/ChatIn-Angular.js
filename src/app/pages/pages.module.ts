import { NgModule } from '@angular/core';
import {PagesRoutingModule} from "./pages-routing.module";
import {BasePageComponent} from "./base/base-page.component";
import {ThemeModule} from "../shared/theme/theme.module";

@NgModule({
  declarations: [BasePageComponent],
  imports: [
    PagesRoutingModule,
    ThemeModule,
  ],
})
export class PagesModule { }
