import { Component, OnInit } from '@angular/core';

import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'live',
  templateUrl: 'live.component.html'
})
export class LiveComponent implements OnInit {
  // event: EventEmitter<any> = new EventEmitter();
  content: string;

  constructor(
    private socketService: SocketService
  ) {
    this.socketService.event.subscribe((result) => {
      switch (result.action) {
        case 'connected':
          this.onConnected();
          break;
        default:
          break;
      }
    });
  }

  ngOnInit() {
  }

  onConnected() {
    this.socketService.get('/live/control')
      .subscribe(res => {
        this.content = res;
        console.log(this.content);
      });
  }
}
