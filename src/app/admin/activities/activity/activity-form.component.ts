import { Component, Input, OnInit,
  Output, EventEmitter }            from '@angular/core';

import { Ng2MaskModule }            from 'ng2-mask';

import { Activity }                 from '../activities.service';

@Component({
  selector: 'activity-form',
  templateUrl: 'activity-form.component.html',
  viewProviders: [ Ng2MaskModule ]
})
export class ActivityFormimplements implements OnInit {
  @Input() activity: Activity;

  @Output() saveEvent: EventEmitter<any> = new EventEmitter();
  @Output() deleteEvent: EventEmitter<any> = new EventEmitter();
  @Output() backEvent: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  canDelete(): boolean {
    return this.activity && this.activity.id !== null;
  }

  onSubmit() {
    this.saveEvent.emit(this.activity);
  }

  onDelete() {
    this.deleteEvent.emit(this.activity);
  }

  goBack() {
    this.backEvent.emit(null);
  }
}