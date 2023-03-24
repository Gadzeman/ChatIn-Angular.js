import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {Message} from "../types/message.type";
import {WsService} from "../../shared/ws/ws.service";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private httpClient: HttpClient,
    private wsService: WsService<Message>,
  ) {}

  private readonly $$message = new Subject<Message>();
  public readonly $message = this.$$message.asObservable();

  private BASE_URL = 'http://localhost:3000/' + 'message/';
  private eventName: string = 'message-event';
  private isWatching: boolean = false;

  public startWatch() {
    if (!this.isWatching) {
      this.isWatching = true;
      this.wsService
        .listen<Message>(this.eventName)
        .subscribe((message: Message) => {
          this.$$message.next(message);
        })
    }
  }

  public getMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.BASE_URL}`);
  }

  public createMessage(body: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.BASE_URL}`, body)
  }
}
