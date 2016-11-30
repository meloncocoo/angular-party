import { Injectable } from '@angular/core';
import { Headers, Http }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Activity {
  constructor(
    public id: number,
    public name: string,
    public description: string/*,
    public count: number,
    public startDate: string,
    public status: string*/
  ) { }
}

// const FETCH_LATENCY = 500;

@Injectable()
export class ActivitiesService {
  private activityUrl = 'http://localhost:8080/api/activity';
  // private headers   = new Headers({
  //   'Content-Type': 'application/json',
  //   'Access-Control-Allow-Origin': 'http://localhost:3000/'
  // });

  constructor(private http: Http) { }

  getActivities() {
    return this.http.get(this.activityUrl)
      .toPromise()
      .then(response => response.json().data as Activity[])
      .catch(this.handleError);
  }

  getActivity(id: number): Promise<Activity> {
    return this.getActivities()
      .then(activities => activities.find((activity: Activity) => activity.id === id));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}