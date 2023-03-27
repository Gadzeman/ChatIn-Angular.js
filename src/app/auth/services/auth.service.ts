import {Injectable} from "@angular/core";
import {User} from "../../users/types/users.types";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthSignInBody, RefreshTokenBody} from "../types/auth.types";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private jwtHelperService: JwtHelperService,
    private router: Router,
  ) {}

  private BASE_URL = environment.api + 'auth/';
  private signUpEndpoint = 'sign-up';
  private signInEndpoint = 'sign-in';
  private refreshTokenEndpoint = 'refresh-token';

  signUp(body: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}${this.signUpEndpoint}`, body);
  }

  signIn(body: AuthSignInBody): Observable<any> {
    return this.httpClient.post<any>(`${this.BASE_URL}${this.signInEndpoint}`, body);
  }

  refreshToken(body: RefreshTokenBody) {
    return this.httpClient.put<any>(`${this.BASE_URL}${this.refreshTokenEndpoint}`, body);
  }

  public isSignedUp(): boolean {
    try {
      const token = localStorage.getItem('token');

      if (this.jwtHelperService.isTokenExpired(token)) {
        const { userId } = this.jwtHelperService.decodeToken(token);

        this.refreshToken({ userId }).subscribe({
          next: (result) => {
            localStorage.removeItem('token');
            localStorage.setItem('token', result.accessToken);
            return true;
          },
          error: (error) => {
            localStorage.removeItem('token');
            this.router.navigate(['auth/sign-in']);
            return false;
          }
        });
      }
      return true;
    } catch (e) {
      this.router.navigate(['auth/sign-in']);

      return false;
    }
  }
}
