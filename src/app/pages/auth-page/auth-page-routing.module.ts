import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {SignUpPageComponent} from "./sign-up-page/sign-up-page.component";

const routes: Routes = [
  {
    path: 'sign-up',
    component: SignUpPageComponent,
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthPageRoutingModule {}
