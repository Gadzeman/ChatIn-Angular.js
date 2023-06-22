import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chat } from '../../classes/chat/chat.interface';
import { environment } from '../../../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { Socket } from 'ngx-socket-io';
import { AuthService } from '../auth/auth.service';
import { User } from '../../classes/user/user.interface';

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
    }
  }

  public getChats(userId: number) {
    return this.http.get<Chat[]>(`${this.BASE_URL}/${userId}`);
  }

  public getChatUsers(
    chatId: number,
    option: 'add' | 'remove'
  ): Observable<User[]> {
    return this.http.get<User[]>(`${this.BASE_URL}/users/${chatId}/${option}`);
  }

  public createChat(body: Partial<Chat>): Observable<Chat> {
    return this.http.post<Chat>(`${this.BASE_URL}`, body);
  }

  public updateChatUsers(
    usersIds: number[],
    chatId: number,
    option: 'add' | 'remove'
  ) {
    return this.http.put(`${this.BASE_URL}/users`, {
      usersIds,
      chatId,
      option,
    });
  }
}
