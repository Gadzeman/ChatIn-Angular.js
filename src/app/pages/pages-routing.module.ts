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
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats-page/chats-page.module').then(m => m.ChatsPageModule),
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule),
      },
      {
        path: 'users',
        loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule),
      },
      {
        path: 'auth',
        loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
