import { Component, OnInit, Input }       from '@angular/core';
import { Router }                         from '@angular/router';

import { Activity }                       from './activities.service';

@Component({
  selector: 'activity-box',
  templateUrl: 'box.component.html'
})
export class BoxComponent implements OnInit {
  @Input() activity: Activity;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  gotoUsers(): void {
    this.router.navigate(['activities/activity', this.activity.id, 'users']);
  }
}

