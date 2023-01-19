import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";
import {SignInPageComponent} from "./sign-in-page/sign-in-page.component";

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  },
  {
    path: 'sign-in',
    component: SignInPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
