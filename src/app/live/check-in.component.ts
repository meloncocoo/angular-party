import { Component, OnInit, Input }  from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { LiveService, QrCode, User, Activity } from './live.service';
import { SocketService } from '../shared/socket.service';

@Component({
  selector: 'check-in',
  templateUrl: 'check-in.component.html'
})
export class CheckInComponent implements OnInit {
  public qrCode: QrCode;
  users: User[];
  activity: Activity;

  constructor(
    private liveService: LiveService,
    private socketService: SocketService,
    private route: ActivatedRoute
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
    let activityId = +this.route.parent.snapshot.params['id'];
    this.liveService.getActivity(activityId).then(activity => {
      this.activity = activity;
    }, err => {

    })
    this.getQrCodeUrl(activityId);
    this.getUsers(activityId);
  }

  getQrCodeUrl(id: number) {
    this.liveService.getQrCode(id).then(qrCode => {
      this.qrCode = qrCode;
    }, err => {

    });
  }

  getUsers(id: number) {
    this.liveService.getUsers(id).then(users => {
      this.users = users;
    }, err => {

    })
  }

  onConnected() {
    this.socketService.get('/live/check-in')
      .subscribe(res => {
        this.update(res);
      });
  }

  update(activity: Activity) {
    this.activity = activity;
    this.getUsers(activity.id);
  }

}