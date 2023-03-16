import {NgModule} from "@angular/core";
import {HomePageComponent} from "./home-page.component";
import {HomePageRoutingModule} from "./home-page-routing.module";
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";

@NgModule({
  declarations: [
    HomePageComponent
  ],
    imports: [
        HomePageRoutingModule,
        FormsModule,
        NgForOf
    ]
})
export class HomePageModule {}
