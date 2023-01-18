import {NgModule} from "@angular/core";
import {UsersPageComponent} from "./users-page.component";
import {UsersPageRoutingModule} from "./users-page-routing.module";

@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [
    UsersPageRoutingModule
  ]
})
export class UsersPageModule {}
