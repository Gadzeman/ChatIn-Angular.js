import {NgModule} from "@angular/core";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {AuthPageRoutingModule} from "./auth-page-routing.module";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";
import {NgIf} from "@angular/common";
import {MatRadioModule} from "@angular/material/radio";

@NgModule({
  declarations: [SignUpPageComponent, SignInPageComponent],
    imports: [AuthPageRoutingModule, MatCardModule, MatInputModule, MatButtonModule, ReactiveFormsModule, FormsModule, NgIf, MatRadioModule],
})
export class AuthPageModule {}
