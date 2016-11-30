import { Component, OnInit }              from '@angular/core';
import { Activity, ActivitiesService }    from './activities.service';

@Component({
  moduleId: module.id,
  selector: 'app-activities',
  templateUrl: 'activities.component.html',
})
export class ActivitiesComponent implements OnInit {
  msg = '数据加载中 ...';
  public activities: Activity[];

  constructor(private activitiesService: ActivitiesService) { }

  ngOnInit() {
    this.activitiesService.getActivities()
      .then(activities => {
        this.msg = '';
        this.activities = activities;
        console.log(this.activities);
      });
  }
}
