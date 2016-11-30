import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Location }                     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ActivitiesService, Activity }  from '../activities.service';

@Component({
  moduleId: module.id,
  selector: 'activity-detail',
  templateUrl: 'activity-detail.component.html'
})
export class ActivityDetailComponent implements OnInit {
  msg = '数据加载中 ...';

  @Input() activity: Activity;

  constructor(
    private activitiesService: ActivitiesService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.activitiesService.getActivity(+params['id']))
      .subscribe(activity => {
        this.msg = '';
        this.activity = activity;
      });
  }

  goBack(): void {
    this.location.back();
  }
}
