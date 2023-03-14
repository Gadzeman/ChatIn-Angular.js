import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Message} from "../types/message.type";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  private BASE_URL = 'http://localhost:3000/' + 'chat/';

  public createMessage(body: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.BASE_URL}`, body)
  }
}
