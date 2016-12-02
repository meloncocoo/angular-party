import { Component, Input, OnInit }     from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';
import { Location }                     from '@angular/common';

import 'rxjs/add/operator/switchMap';

import { ActivitiesService, Activity }  from '../activities.service';
import { Alert }                        from '../../shared/alert.component';

@Component({
  moduleId: module.id,
  selector: 'activity-detail',
  templateUrl: 'activity-detail.component.html'
})
export class ActivityDetailComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');

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
        this.alert.clear();
        this.activity = activity;
      });
  }

  toSave(model: Activity): void {
    this.activitiesService.updateActivity(model)
      .then(() => {
        this.location.back();
      }, (err) => {
        this.alert.set('danger', err, true);
      });
  }

  toDelete(model: Activity): void {
    this.activitiesService.deleteActivity(model.id)
      .then(() => {
        this.location.back();
      }, (err) => {
        this.alert.set('danger', err, true);
      });
  }

  goBack(): void {
    this.location.back();
  }
}
