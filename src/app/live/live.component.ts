import { Component, OnInit } from '@angular/core';

import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'live',
  templateUrl: 'live.component.html'
})
export class LiveComponent implements OnInit {
  constructor(
    private socketService: SocketService
  ) { }

  ngOnInit() {
    this.socketService.get('topic/greetings')
      .subscribe((item: any) => {
        alert(item);
      });
  }
}