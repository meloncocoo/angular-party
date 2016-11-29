import { Component, OnInit }              from '@angular/core';
import { Activity, ActivityService }      from './activity.service';

@Component({
  moduleId: module.id,
  selector: 'app-activity',
  templateUrl: 'activity.component.html',
})
export class ActivityComponent implements OnInit {
  activities: Activity[] = [];

  constructor(private activityService: ActivityService) { }

  ngOnInit() {
    this.activityService.getActivities()
    .then(activities => this.activities = activities);
  }
}
