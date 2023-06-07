import {Injectable} from "@angular/core";
import {User} from "../types/users.types";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {ApiService} from "../../shared/api/api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private httpClient: HttpClient,
    private apiService: ApiService
  ) {}

  private BASE_URL = environment.api + 'users/';

  public getUsers(): Observable<User[]> {
    const headers = this.apiService.getHeaders();
    return this.httpClient.get<User[]>(`${this.BASE_URL}`, {headers});
  }
}
