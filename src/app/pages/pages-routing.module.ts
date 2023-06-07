import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import {BasePageComponent} from "./base-page/base-page.component";
import {AuthGuardService} from "../auth/services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
      },
      {
        path: 'chats',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./chats-page/chats-page.module').then(m => m.ChatsPageModule),
      },
      {
        path: 'settings',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule),
      },
      {
        path: 'users',
        canActivate: [AuthGuardService],
        loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth-page/auth-page.module').then(m => m.AuthPageModule),
  },
  {
    path: '**',
    redirectTo: '',
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
