import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    HomePageRoutingModule,
    FormsModule
  ]
})
export class HomePageModule {}
