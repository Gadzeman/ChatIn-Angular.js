import {NgModule} from "@angular/core";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {AuthPageRoutingModule} from "./auth-page-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [SignUpPageComponent],
  imports: [AuthPageRoutingModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule]
})
export class AuthPageModule {}
