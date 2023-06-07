import {Injectable} from "@angular/core";
import {User} from "../../users/types/users.types";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthSignInBody, RefreshTokenBody} from "../types/auth.types";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {environment} from "../../../environments/environment";

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

  public async isSignedUp(): Promise<boolean> {
    const token = localStorage.getItem('token');

    const isTokenExpired = this.jwtHelperService.isTokenExpired(token)

    if (isTokenExpired) {
      const {userId} = this.jwtHelperService.decodeToken(token);

      try {
        const result = await this.refreshToken({userId}).toPromise();
        localStorage.removeItem('token');
        localStorage.setItem('token', result.accessToken);
        return true
      } catch (e) {
        localStorage.removeItem('token');
        this.router.navigate(['auth/sign-in']);
        return false
      }
    } else {
      return true;
    }
  }
}
