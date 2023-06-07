import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  async canActivate(): Promise<boolean> {
    if (await this.authService.isSignedUp()) {
      return true;
    } else {
      console.log(12345)
      this.router.navigate(['auth/sign-in']);
      return false;
    }
  }
}
