import { Component, OnInit }              from '@angular/core';
import { Router }                         from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'activity-users',
  templateUrl: 'activity-users.component.html'
})
export class ActivityUsersComponent implements OnInit {
  constructor(
    private router: Router,
    private location: Location
  ) {}

  ngOnInit() {

  }

  goBack(): void {
    this.location.back();
  }
}
