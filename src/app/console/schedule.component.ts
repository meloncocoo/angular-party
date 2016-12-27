import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

import { ConsoleService, Schedule }     from './console.service';
import { Alert }                        from '../shared/alert.component';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');
  schedules: Schedule[];

  constructor(
    private consoleService: ConsoleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.parent.params
      .switchMap((params: Params) => this.consoleService.getScheduleByActivityId(+params['id']))
      .subscribe(schedules => {
        this.alert.clear();
        this.schedules = schedules;
      }, err => {
        this.alert.set('danger', err, true);
      });
  }
}