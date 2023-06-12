import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";
import {ApiService} from "../api/api.service";
import {User} from "../../classes/user/user.interface";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  private BASE_URL = environment.api + 'user/';

  public getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.BASE_URL}`);
  }
}
