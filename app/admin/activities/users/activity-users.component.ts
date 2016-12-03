import { Component, OnInit }  from '@angular/core';
import { Router }             from '@angular/router';
import { Location }           from '@angular/common';

@Component({
  moduleId: module.id,
  selector: 'activity-users',
  templateUrl: 'activity-users.component.html'
})
export class ActivityUsersComponent implements OnInit {
  msg = '数据加载中 ...';

  constructor(
    private router: Router,
    private location: Location
  ) { }

  ngOnInit() {
    this.msg = '';
  }

  goBack(): void {
    this.location.back();
  }
}
