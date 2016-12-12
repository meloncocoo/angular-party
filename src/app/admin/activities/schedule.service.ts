import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

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
export class ScheduleService {
  private scheduleUrl = `${API}/schedule`;

  private headers   = new Headers({
    'Content-Type': 'application/json'
  });

  private options = new ResponseOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getSchedulesByActivityId(id: number): Promise<Schedule[]> {
    const url = `${this.scheduleUrl}?activityId=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Schedule[])
      .catch(this.handleError);
  }

  addSchedule(schedule: Schedule): Promise<Schedule> {
    const url = `${this.scheduleUrl}`;
    return this.http
      .post(url, JSON.stringify(schedule), this.options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  deleteSchedule(id: number): Promise<void> {
    const url = `${this.scheduleUrl}/${id}`;
    return this.http.delete(url, this.options)
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    return Promise.reject(errMsg);
  }
}
