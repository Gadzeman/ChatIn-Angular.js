import { Component } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.scss'],
})
export class SignInPageComponent {
  constructor(private authService: AuthService, private router: Router) {}

  public disableButton: boolean = true;
  public email: FormControl<string> = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public password: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);

  public signIn() {
    this.authService
      .signIn({ email: this.email.value, password: this.password.value })
      .subscribe({
        next: async (result) => {
          localStorage.setItem('token', result.accessToken);

          await this.router.navigate(['/']);
        },
        error: (error) => {},
      });
  }

  public handleDisableButton(e: Event) {
    this.disableButton = this.email.invalid || this.password.invalid;
  }
}
