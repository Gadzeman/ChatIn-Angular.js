import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {catchError, map, Observable, of, switchMap} from "rxjs";
import {AuthService} from "../services/auth/auth.service";
import {Injectable} from "@angular/core";
import {Router} from "@angular/router";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  private setReqHeaders(req: HttpRequest<Request>) {
    const token = localStorage.getItem('token');

    req = req.clone({
      setHeaders: {
        Authorization: `${token}`
      }
    });

    return req;
  }

  intercept(req: HttpRequest<Request>, next: HttpHandler): Observable<HttpEvent<any>> {
    const tokenExpired = this.authService.isTokenExpired()

    if (req.url.includes(this.authService.refreshTokenEndpoint)) {
      return next.handle(req);
    }

    if (tokenExpired && !req.url.includes(this.authService.signInEndpoint)) {
      return this.authService.getRefreshedToken().pipe(
        switchMap(res => {
          localStorage.removeItem('token')
          localStorage.setItem('token', res.token)

          return next.handle(
            this.setReqHeaders(req)
          );
        }),
        catchError((error) => {
          localStorage.removeItem('token')
          this.router.navigate(['/auth/sign-in']);
          return of(error);
        })
      )
    }

    return next.handle(
      this.setReqHeaders(req)
    );
  }
}
