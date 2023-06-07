import {NgModule} from "@angular/core";
import {UsersPageComponent} from "./users-page.component";
import {UsersPageRoutingModule} from "./users-page-routing.module";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    UsersPageComponent
  ],
    imports: [
        UsersPageRoutingModule,
        NgForOf
    ]
})
export class UsersPageModule {}
