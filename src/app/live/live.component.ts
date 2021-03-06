import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params, NavigationExtras } from '@angular/router';

import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'live',
  templateUrl: 'live.component.html'
})
export class LiveComponent implements OnInit {
  activityId: number;

  constructor(
    private socketService: SocketService,
    private route: ActivatedRoute,
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
    this.activityId = +this.route.snapshot.params['id'];
  }

  onConnected() {
    this.socketService.get('/live/control')
      .subscribe(res => {
        this.update(res);
      });
  }

  update(res: any): any {
    let name = res.name;
    let id: number = res.activityId;
    let urlTree: any;

    switch (name) {
      case 'vote':
      case 'checkin':
        urlTree = this.router.createUrlTree(['./check-in'], {relativeTo: this.route});
        this.router.navigateByUrl(urlTree);
        break;
      case 'lottery':
        urlTree = this.router.createUrlTree(['./lottery'], {relativeTo: this.route});
        this.router.navigateByUrl(urlTree);
        break;
      default:
        urlTree = this.router.createUrlTree(['./'], {relativeTo: this.route});
        this.router.navigateByUrl(urlTree);
    }
  }
}
