import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ClientService, Activity } from './client.service';

@Component({
  selector: 'welcome',
  templateUrl: 'welcome.component.html'
})
export class WelcomeComponent implements OnInit {
  activity: Activity;

  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    let activityId = +this.route.parent.snapshot.params['id'];
    this.getActivity(activityId);
  }

  getActivity(id: number) {
    this.clientService.getActivity(id)
      .then(activity => this.activity = activity, err => {});
  }
}