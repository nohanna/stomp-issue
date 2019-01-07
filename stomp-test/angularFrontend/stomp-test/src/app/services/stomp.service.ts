import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { RxStompService, InjectableRxStompConfig } from '@stomp/ng2-stompjs';
import { Message, IPublishParams, StompHeaders } from '@stomp/stompjs';

export const myRxStompConfig: InjectableRxStompConfig = {
  webSocketFactory: () => new WebSocket('ws://localhost:4200/ws-test'),
  connectHeaders: {},
  heartbeatIncoming: 5000,
  heartbeatOutgoing: 5000,
  reconnectDelay: 1000
};

@Injectable()
export class StompService {
  constructor(private stomp: RxStompService) {}

  activate(): void {
    this.stomp.configure(myRxStompConfig);
    this.stomp.activate();
  }

  deactivate(): void {
    this.stomp.deactivate();
  }

  watch(destination: string): Observable<any> {
    return this.stomp
      .watch(destination)
      .pipe(map((message: Message) => message.body));
  }

  publish(destination: string, body: any, headers?: StompHeaders): void {
    const message: string = JSON.stringify(body);
    const params: IPublishParams = {
      destination: destination,
      headers: headers,
      body: message
    };
    this.stomp.publish(params);
  }
}
