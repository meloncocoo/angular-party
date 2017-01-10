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

  onStart(schedule: Schedule) {
    let control = {
      scheduleId: schedule.id,
      activityId: schedule.activityId,
      action: 'START'
    };
    this.consoleService.controlSchedule(control)
      .then(() => {
        schedule.status = 'RUNNING';
      }, err => {
        this.alert.set('danger', err, true);
      });
  }

  onEnd(schedule: Schedule) {
    let control = {
      scheduleId: schedule.id,
      activityId: schedule.activityId,
      action: 'END'
    };
    this.consoleService.controlSchedule(control)
      .then(() => {
        schedule.status = 'READY';
      }, err => {
        this.alert.set('danger', err, true);
      });
  }

  onDraw(schedule: Schedule) {
    let control = {
      scheduleId: schedule.id,
      activityId: schedule.activityId,
      action: 'DRAWING'
    };
    this.consoleService.controlSchedule(control)
      .then(() => {
        schedule.status = 'DRAWING';
      }, err => {
        this.alert.set('danger', err, true);
      });
  }

  onStop(schedule: Schedule) {
    let control = {
      scheduleId: schedule.id,
      activityId: schedule.activityId,
      action: 'STOP'
    };
    this.consoleService.controlSchedule(control)
      .then(() => {
        schedule.status = 'RUNNING';
      }, err => {
        this.alert.set('danger', err, true);
      });
  }
}
