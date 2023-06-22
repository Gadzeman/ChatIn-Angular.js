import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  async canActivate(): Promise<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      return false;
    }

    const isTokenExpired = this.authService.isTokenExpired();

    if (isTokenExpired) {
      const { userId } = this.authService.getAccessTokenPayload();
      try {
        const result = await this.authService
          .refreshToken({ userId })
          .toPromise();
        localStorage.removeItem('token');
        localStorage.setItem('token', result.token);
        return true;
      } catch (e) {
        localStorage.removeItem('token');
        this.router.navigate(['auth/sign-in']);
        return false;
      }
    } else {
      return true;
    }
  }
}
