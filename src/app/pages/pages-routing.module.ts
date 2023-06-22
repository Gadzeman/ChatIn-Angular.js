import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BasePageComponent } from './base/base-page.component';
import { AuthGuard } from '../shared/guards/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BasePageComponent,
    children: [
      {
        path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./home/home-page.module').then((m) => m.HomePageModule),
      },
      {
        path: 'chats',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./chats/chats-page.module').then((m) => m.ChatsPageModule),
      },
      {
        path: 'settings',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./settings/settings-page.module').then(
            (m) => m.SettingsPageModule
          ),
      },
      {
        path: 'users',
        canActivate: [AuthGuard],
        loadChildren: () =>
          import('./users/users-page.module').then((m) => m.UsersPageModule),
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-page.module').then((m) => m.AuthPageModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
