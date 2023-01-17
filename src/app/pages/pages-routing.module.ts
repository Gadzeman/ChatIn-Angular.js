import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import {BasePageComponent} from "./base-page/base-page.component";

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
