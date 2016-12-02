import { Component, OnInit }  from '@angular/core';

import { Activity }           from '../activities.service';

@Component({
  moduleId: module.id,
  selector: 'activity-add',
  templateUrl: 'activity-add.component.html'
})
export class ActivityAddComponent implements OnInit {
  activity: Activity;

  constructor() { }

  ngOnInit() {
    this.activity = new Activity();
  }
}