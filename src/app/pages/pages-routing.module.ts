import { Routes, RouterModule } from "@angular/router";
import {NgModule} from "@angular/core";
import {BasePageComponent} from "./base-page/base-page.component";
import {AuthGuardService} from "../auth/services/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home-page/home-page.module').then(m => m.HomePageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'chats',
        loadChildren: () => import('./chats-page/chats-page.module').then(m => m.ChatsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'settings',
        loadChildren: () => import('./settings-page/settings-page.module').then(m => m.SettingsPageModule),
        canActivate: [AuthGuardService],
      },
      {
        path: 'users',
        loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule),
        canActivate: [AuthGuardService],
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
