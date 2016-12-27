import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Activity {

}

export class Schedule {
  constructor(
    public id?: number,
    public type?: string,
    public activityId?: number,
    public name?: string,
    public desc?: string,
    public startTime?: string,
    public endTime?: string
  ) { }
}

@Injectable()
export class ConsoleService {
  private url = `${API}`;

  constructor(private http: Http) { }

  getActivity(id: number): Promise<Activity> {
    const url = `${this.url}/activity/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity)
      .catch(this.handleError);
  }

  getScheduleByActivityId(id: number): Promise<Schedule[]> {
    const url = `${this.url}/schedule?activityId=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Schedule[])
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.message || body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }
}
