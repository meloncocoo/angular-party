import { Component, ViewChild, Input, OnInit }   from '@angular/core';
import { ModalComponent }                 from 'ng2-bs3-modal/ng2-bs3-modal';

import { ActivitiesService, Activity, Schedule }    from '../activities.service';
import { ScheduleService }                from '../schedule.service';
import { Alert }                          from '../../../shared/alert.component';

@Component({
  selector: 'schedule',
  templateUrl: 'schedule.component.html'
})
export class ScheduleComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');

  @Input() activity: Activity;

  @ViewChild('normalSchedule')
  normalSchedule: ModalComponent;

  private schedule: Schedule;
  private schedules: Schedule[];

  constructor(
    private activitiesService: ActivitiesService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.getSchedulesByActivityId(this.activity.id);
  }

  getSchedulesByActivityId(id: number) {
    this.scheduleService.getSchedulesByActivityId(id).then(schedules => {
      this.schedules = schedules;
      this.alert.clear();
    }, err => {
      this.alert.set('danger', err, true);
    });
  }

  onSubmit() {
    this.activitiesService.addScheduleForActivity(this.activity.id, this.schedule)
      .then(schedule => {
        if (schedule) {
          this.schedules.push(schedule);
        }
        this.schedule = null;
        this.normalSchedule.close();
        this.alert.clear();
      }, (err) => {
        this.alert.set('danger', err, true);
      });
  }

  delete(schedule: Schedule) {
    this.scheduleService.deleteSchedule(schedule.id)
      .then(() => {
        this.schedules = this.schedules.filter(s => s !== schedule);
        this.alert.clear();
      }, (err) => {
        this.alert.set('danger', err, true);
      });
  }

  addNormalSchedule() {
    this.schedule = new Schedule();
    this.alert.clear();
    this.normalSchedule.open();
  }
}
