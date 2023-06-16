import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Message } from '../../classes/chat/message.interface';
import { environment } from '../../../../environments/environment';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  constructor(
    private http: HttpClient,
    private socket: Socket,
    private authService: AuthService
  ) {}

  private BASE_URL = environment.api + 'message';

  private isStarted: boolean = false;

  public messages: Message[] = [];
  private readonly $$messages = new Subject<Message[]>();
  public readonly $messages = this.$$messages.asObservable();

  public message: Message = null;
  private readonly $$message = new Subject<Message>();
  public readonly $message = this.$$message.asObservable();

  public start() {
    if (!this.isStarted) {
      this.isStarted = true;

      const { userId } = this.authService.getAccessTokenPayload();

      this.getMessages(userId).subscribe((messages) => {
        this.messages = messages;
        this.$$messages.next(this.messages);
      });

      this.socket.on('message-created', (message: Message) => {
        this.message = message;
        this.$$message.next(this.message);
        this.messages = [...this.messages, this.message];
        this.$$messages.next(this.messages);
      });
    }
  }

  public getMessages(userId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.BASE_URL}/${userId}`);
  }

  public sendMessage(body: Message): Observable<Message> {
    return this.http.post<Message>(`${this.BASE_URL}`, body);
  }

  public emitMessageCreated(message: Message): void {
    this.socket.emit('message-created', message);
  }
}
