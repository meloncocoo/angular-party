import { Component, Input, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'activity-form',
  templateUrl: 'activity-form.component.html'
})
export class ActivityFormimplements implements OnInit {
  @Input() activity: Activity;

  constructor() { }

  ngOnInit() { }
}