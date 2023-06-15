import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../../classes/chat/message.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(private http: HttpClient) {}

  private BASE_URL = environment.api + 'message';

  public sendMessage(body: Message): Observable<Message> {
    return this.http.post<Message>(`${this.BASE_URL}`, body);
  }
}
