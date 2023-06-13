import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WsService<T> {
  private socket: Socket;

  public connect(): void {
    this.socket = io(environment.ws);
  }
}
