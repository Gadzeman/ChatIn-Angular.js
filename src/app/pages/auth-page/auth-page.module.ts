import {NgModule} from "@angular/core";
import {RegisterPageComponent} from "./register-page/register-page.component";
import {AuthPageRoutingModule} from "./auth-page-routing.module";

@NgModule({
  declarations: [RegisterPageComponent],
  imports: [AuthPageRoutingModule]
})
export class AuthPageModule {}
