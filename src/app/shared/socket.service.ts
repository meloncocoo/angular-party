import { Injectable, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import * as SockJS from 'sockjs-client';
import * as Stomp from 'webstomp-client';

// import { IMessage, ISocketItem } from '../../models';

@Injectable()
export class SocketService {

  @Output() event: EventEmitter<any> = new EventEmitter();

  private name: string;
  private host: string = `${WSSOCKET}`;
  private socket: any;
  private client: any;
  private connected: boolean = false;

  constructor() {
    let socket = new SockJS(this.host + '/gs-guide-websocket');
    this.client = Stomp.over(socket);
    this.client.connect({}, frame => this.connect(frame));
  }

  get(name: string): Observable<any> {
    return Observable.create((observer: any) => {
      this.client.subscribe(name, (res: any) => {
        console.log(res.body);
        observer.next(JSON.parse(res.body));
      });
    });
  }

  private connect(frame) {
    console.log('Connected: ' + frame);
    this.connected = true;
    this.event.emit({ action: 'connected' });
  }

  // Handle connection closing
  private disconnect() {
    console.log(`Disconnected from '${this.name}'`);
  }
}
