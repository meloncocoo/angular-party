import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ActivitiesService, User }      from '../activities.service';
import { Alert }                        from '../../../shared/alert.component';

@Component({
  selector: 'activity-users',
  templateUrl: 'activity-users.component.html'
})
export class ActivityUsersComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');

  users: User;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.activitiesService.getUsersByActivityId(+params['id']))
      .subscribe(users => {
        this.alert.clear();
        this.users = users;
      }, err => {
        this.alert.set('danger', err, true);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
