import {HttpHeaders} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public getHeaders() {
    let headers = new HttpHeaders();
    const authToken = localStorage.getItem('token');
    if (authToken) {
      headers = headers.append('Authorization', `${authToken}`);
    }
    return headers;
  }
}
