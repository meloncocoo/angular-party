import { Injectable } from '@angular/core';
import { Headers, Http, Response }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Activity {
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public parts: number,
    public date: string
  ) { }
}

// const FETCH_LATENCY = 500;

@Injectable()
export class ActivitiesService {
  private headers   = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(private http: Http) { }

  getActivities(): Promise<Activity[]> {
    let url = 'http://localhost:8080/api/activity';
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity[])
      .catch(this.handleError);
  }

  getActivity(id: number): Promise<Activity> {
    let url = `http://localhost:8080/api/activity/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}