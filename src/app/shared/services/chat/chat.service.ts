import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../../classes/chat/chat.interface';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient, private socket: Socket) {}

  private BASE_URL = environment.api + 'chat/';

  private isStarted: boolean = false;

  public start() {
    if (!this.isStarted) {
      this.isStarted = true;
      this.onChatCreated();
    }
  }

  public createChat(body: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>(`${this.BASE_URL}`, body);
  }

  public emitChatCreated(chat: Chat) {
    this.socket.emit('chat-created', chat);
  }

  public onChatCreated() {
    this.socket.on('chat-created', (chat: Chat) => {
      console.log(chat);
    });
  }
}
