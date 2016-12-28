import { Component, OnInit } from '@angular/core';

import { ConsoleService } from './console.service';
import { Alert } from '../shared/alert.component';

@Component({
  selector: 'screen',
  templateUrl: 'screen.component.html'
})
export class ScreenComponent implements OnInit {
  alert = new Alert();
  action: string = '';

  constructor(
    private consoleService: ConsoleService
  ) { }

  ngOnInit() { }

  onClick(name: string) {
    this.action = name;
    let activityId = 1;
    this.alert.set('loading', '执行中...');
    this.consoleService.sendAction(name, activityId)
      .then(() => {
        this.alert.clear();
      }, err => {
        this.alert.set('danger', err, true);
      })
  }
}