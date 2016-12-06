import { Component, OnInit }  from '@angular/core';
import { Location }           from '@angular/common';

import { SpinnerComponent }               from '../../../shared/spinner.component';
import { Activity, ActivitiesService }    from '../activities.service';

@Component({
  selector: 'activity-add',
  templateUrl: 'activity-add.component.html'
})
export class ActivityAddComponent implements OnInit {
  activity: Activity;

  constructor(
    private activitiesService: ActivitiesService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.activity = new Activity();
  }

  goBack(): void {
    this.location.back();
  }

  toSave(model: Activity): void {
    this.activitiesService.addActivity(model)
      .then(() => {
        this.location.back();
      }, () => {
        alert('error');
      });
  }
}