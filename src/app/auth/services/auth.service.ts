import {Injectable} from "@angular/core";
import {User} from "../../users/types/users.types";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private httpClient: HttpClient
  ) {}

  private BASE_URL = 'http://localhost:3000/'
  private signUpEndpoint = 'auth/sign-up'

  signUp(body: User): Observable<User> {
    return this.httpClient.post<User>(`${this.BASE_URL}${this.signUpEndpoint}`, body)
  }
}
