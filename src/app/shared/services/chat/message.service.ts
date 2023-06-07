import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {WsService} from "../ws/ws.service";
import {environment} from "../../../../environments/environment";
import {Message} from "../../classes/chat/message.interface";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  constructor(
    private httpClient: HttpClient,
    private wsService: WsService<Message>,
  ) {}

  private messages: Message[] = [];

  private readonly $$messages = new Subject<Message[]>();
  public readonly $messages = this.$$messages.asObservable();

  private BASE_URL = environment.api + 'message/';
  private eventName: string = 'message-event';
  private isWatching: boolean = false;

  public startWatch() {
    if (!this.isWatching) {
      this.isWatching = true;
      this.wsService
        .listen<Message>(this.eventName)
        .subscribe((message: Message) => {
          this.messages.push(message);
          this.$$messages.next(
            this.messages.sort(
              (a, b) =>
                new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
            )
          );
        })
      this.fetchMessages().subscribe(messages => {
        this.messages = messages;
        this.$$messages.next(
          this.messages.sort(
            (a, b) =>
              new Date(a.datetime).getTime() - new Date(b.datetime).getTime()
          )
        );
      })
    }
  }

  public getMessages(): Message[] {
    return this.messages;
  }

  private fetchMessages(): Observable<Message[]> {
    return this.httpClient.get<Message[]>(`${this.BASE_URL}`);
  }

  public createMessage(body: Message): Observable<Message> {
    return this.httpClient.post<Message>(`${this.BASE_URL}`, body)
  }
}
