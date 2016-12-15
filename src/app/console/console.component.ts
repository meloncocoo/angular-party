import { Component, OnInit }            from '@angular/core';
import { ActivatedRoute, Params }       from '@angular/router';

import { ConsoleService, Activity }     from './console.service';
import { Alert }                        from '../shared/alert.component';

@Component({
  selector: 'console',
  templateUrl: 'console.component.html'
})
export class ConsoleComponent implements OnInit {
  alert = new Alert('loading', '数据加载中 ...');
  activity: Activity;

  constructor(
    consoleService: ConsoleService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.consoleService.getActivity(+params['id']))
      .subscribe(activity => {
        this.alert.clear();
        this.activity = activity;
      });
  }
}
