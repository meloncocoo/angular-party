import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Location }                     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ActivityService, Activity }    from './activity.service';

@Component({
  moduleId: module.id,
  selector: 'activity-detail',
  templateUrl: 'activity-detail.component.html'
})
export class ActivityDetailComponent implements OnInit {
  @Input() activity: Activity;

  constructor(
    private activityService: ActivityService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.activityService.getActivity(+params['id']))
      .subscribe(activity => this.activity = activity);
  }

  goBack(): void {
    this.location.back();
  }
}
