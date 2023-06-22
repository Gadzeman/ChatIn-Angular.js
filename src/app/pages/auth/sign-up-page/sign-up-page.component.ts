import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

import { AuthService } from '../../../shared/services/auth/auth.service';
import { UserRoles } from '../../../shared/classes/user/user-roles.enum';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss'],
})
export class SignUpPageComponent {
  constructor(private authService: AuthService) {}

  public disableButton: boolean = true;
  private email: string = 'test-email@gmail.com';
  public name: FormControl<string> = new FormControl('', [Validators.required]);
  public password: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);
  public repeatPassword: FormControl<string> = new FormControl('', [
    Validators.required,
  ]);
  private role: UserRoles = UserRoles.user;

  signUp() {
    if (this.repeatPassword.value !== this.password.value) {
      this.repeatPassword.setErrors({ invalid: true });
      return;
    }
    this.authService
      .signUp({
        id: null,
        email: this.email,
        name: this.name.value,
        password: this.password.value,
        role: this.role,
      })
      .subscribe((result) => {});
  }

  handleDisableButton(e: Event) {
    this.disableButton =
      this.name.invalid || this.password.invalid || this.repeatPassword.invalid;
  }
}
