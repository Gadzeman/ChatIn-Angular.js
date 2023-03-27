import {BehaviorSubject, Observable, Observer, skip, skipWhile, Subject, takeUntil, timer} from "rxjs";
import {WebSocketSubject} from "rxjs/internal/observable/dom/WebSocketSubject";
import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment.dev";

@Injectable({
  providedIn: 'root'
})
export class WsService<T> {
  private isConnecting = false;

  private isConnected$$ = new BehaviorSubject<boolean>(false);
  public isConnected$ = this.isConnected$$.asObservable();

  private wsSubj: WebSocketSubject<any>;
  private subscriptions: Map<string, { data: any; subj: Subject<any> }> = new Map();

  private stopListen$$ = new Subject();

  listen<K>(eventName: string, data: { [key: string]: any } = {}, registered: Observer<true> = null): Observable<K> {
    let subj;
    if (this.subscriptions.has(eventName)) {
      subj = this.subscriptions.get(eventName).subj;
    } else {
      subj = new Subject<T>();
      this.subscriptions.set(eventName, {
        data,
        subj,
      })
    }
    if (this.isConnected$$.getValue()) {
      this.registerEventSubscription(eventName, data, registered);
    } else {
      this.connect();
    }
    return subj.asObservable();
  }

  connect<K>() {
    if (this.isConnecting) {
      return;
    }
    const hasError = new Subject();
    this.isConnecting = true;
    this.wsSubj = new WebSocketSubject(environment.ws);
    this.wsSubj.subscribe({
      next: (message: {
        event: string,
        data: T,
      }) => {
        const eventName = message.event;
        let subj;
        if (this.subscriptions.has(eventName)) {
          subj = this.subscriptions.get(eventName).subj;
          subj.next(message.data);
        }
      },
      error: e => {
        hasError.next(true);
        this.isConnecting = false;
        this.isConnected$$.next(false);
        this.wsSubj.complete();
        setTimeout(() => {
          this.connect();
        },1500);
      },
      complete: () => {
        this.isConnecting = false;
        this.isConnected$$.next(false);
      }
    });
    timer(500)
      .pipe(
        takeUntil(
          this.isConnected$$
            .pipe(
              skip(1),
              skipWhile(res => res),
            )
        )
      ).subscribe(async () => {
        try {
          await this.registerEventSubscriptions();
        } catch (e) {
          return;
        }
        this.isConnected$$.next(true);
        this.isConnecting = false;
      })
  }

  stopListen(eventName: string) {
    if (this.subscriptions.has(eventName)) {
      const subj = this.subscriptions.get(eventName).subj;
      subj.complete();
      this.subscriptions.delete(eventName);
    }
    if (this.subscriptions.size === 0 && this.wsSubj) {
      this.wsSubj.complete();
      this.stopListen$$.next(null);
    }
  }

  private registerEventSubscription(
    eventName: string,
    data: { [key: string]: any } = {},
    registered: Observer<true> = null,
  ) {
    this.wsSubj.next({ event: eventName, data });
    if (registered) {
      registered.next(true);
      registered.complete();
    }
  }

  private async registerEventSubscriptions() {
    for (const [key, value] of this.subscriptions.entries()) {
      const subscribed = new Subject<boolean>();
      this.registerEventSubscription(key, value.data, subscribed);
      await subscribed.toPromise();
    }
  }
}
