import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../../classes/chat/chat.interface';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { WsService } from '../ws/ws.service';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(private http: HttpClient, private socket: Socket) {}

  private BASE_URL = environment.api + 'chat/';

  public createChat(body: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>(`${this.BASE_URL}`, body);
  }

  public emitChatCreated(chat: Chat) {
    this.socket.emit('chat-created', chat);
  }
}
