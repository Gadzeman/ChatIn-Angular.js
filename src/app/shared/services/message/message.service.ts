import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Message } from '../../classes/chat/message.interface';
import { environment } from '../../../../environments/environment';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth/auth.service';
import { Chat } from '../../classes/chat/chat.interface';

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
    }
  }

  public getMessages(chatId: number): Observable<Message[]> {
    return this.http.get<Message[]>(`${this.BASE_URL}/${chatId}`);
  }

  public sendMessage(body: Message): Observable<Message> {
    return this.http.post<Message>(`${this.BASE_URL}`, body);
  }

  public emitMessageCreated(message: Message, chat: Chat): void {
    this.socket.emit('messageCreated', { message, chat });
  }
}
