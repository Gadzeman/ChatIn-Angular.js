import {Injectable} from "@angular/core";
import {User} from "../../users/types/users.types";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthSignInBody} from "../types/auth.types";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router,
  ) {}

  private BASE_URL = 'http://localhost:3000/';
  private signUpEndpoint = 'auth/sign-up';
  private signInEndpoint = 'auth/sign-in';

  signUp(body: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}${this.signUpEndpoint}`, body);
  }

  signIn(body: AuthSignInBody): Observable<any> {
    return this.httpClient.post<any>(`${this.BASE_URL}${this.signInEndpoint}`, body);
  }

  public isSignedUp(): boolean {
    try {
      const token = localStorage.getItem('token');

      return !this.jwtHelperService.isTokenExpired(token);
    } catch (e) {
      this.router.navigate(['auth/sign-in']);

      return false;
    }
  }
}
