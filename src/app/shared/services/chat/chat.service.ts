import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../../classes/chat/chat.interface';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private http: HttpClient,
    private socket: Socket,
    private authService: AuthService
  ) {}

  private BASE_URL = environment.api + 'chat';

  private isStarted: boolean = false;

  public chats: Chat[] = [];
  private readonly $$chats = new Subject<Chat[]>();
  public readonly $chats = this.$$chats.asObservable();

  public start() {
    if (!this.isStarted) {
      this.isStarted = true;
      const { userId } = this.authService.getAccessTokenPayload();
      this.getChats(userId).subscribe((chats) => {
        this.chats = chats;
        this.$$chats.next(this.chats);
      });
      this.onChatCreated();
    }
  }

  public getChats(userId: number) {
    return this.http.get<Chat[]>(`${this.BASE_URL}/${userId}`);
  }

  public createChat(body: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>(`${this.BASE_URL}`, body);
  }

  public emitChatCreated(chat: Chat) {
    this.socket.emit('chat-created', chat);
  }

  public onChatCreated() {
    this.socket.on('chat-created', (chat: Chat) => {
      this.chats = [...this.chats, chat];
      this.$$chats.next(this.chats);
    });
  }
}
