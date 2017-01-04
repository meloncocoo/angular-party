import { Component, OnInit }              from '@angular/core';
import { Activity, ActivitiesService }    from './activities.service';
import { Alert }                          from '../../shared/alert.component';

@Component({
  selector: 'app-activities',
  templateUrl: 'activities.component.html'
})
export class ActivitiesComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');
  public activities: Activity[] = [];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.getActivities();
  }

  getActivities() {
    this.activitiesService.getActivities().then(activities => {
      this.activities = activities;
      this.alert.clear();
    }, err => {
      this.alert.set('danger', err, true);
    });
  }

  refresh() {
    this.activities = null;
    this.alert.set('loading', '数据加载中 ...');
    this.getActivities();
  }
}
