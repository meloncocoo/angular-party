import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'live',
  templateUrl: 'live.component.html'
})
export class LiveComponent implements OnInit {
  // event: EventEmitter<any> = new EventEmitter();
  content: { name: null };

  constructor(
    private socketService: SocketService,
    private router: Router
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
        this.update();
      });
  }

  update(): any {
    let name = this.content.name;

    switch(name) {
      case 'vote':
      case 'checkin':
        this.router.navigate(['live/check-in']); break;
      default:
        this.router.navigate(['live']);
    }
  }
}
