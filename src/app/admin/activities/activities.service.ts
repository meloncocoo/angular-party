import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions }  from '@angular/http';

import 'rxjs/add/operator/toPromise';

export class Activity {
  constructor(
    public id?: number,
    public name?: string,
    public desc?: string,
    public parts?: number,
    public date?: string
  ) { }
}

export class User {
  constructor(
    public id?: number,
    public name?: string
  ) { }
}

// const FETCH_LATENCY = 500;

@Injectable()
export class ActivitiesService {
  private activityUrl = `${API}/activity`;

  private headers   = new Headers({
    'Content-Type': 'application/json'
  });

  private options = new ResponseOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getActivities(): Promise<Activity[]> {
    const url = `${this.activityUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity[])
      .catch(this.handleError);
  }

  getActivity(id: number): Promise<Activity> {
    const url = `${this.activityUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity)
      .catch(this.handleError);
  }

  getUsersByActivityId(id: number): Promise<User[]> {
    const url = `${this.activityUrl}/${id}/users`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  addActivity(activity: Activity): Promise<Activity> {
    const url = `${this.activityUrl}`;
    return this.http
      .post(url, JSON.stringify(activity), this.options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  updateActivity(activity: Activity): Promise<Activity> {
    const url = `${this.activityUrl}/${activity.id}`;
    return this.http
      .put(url, JSON.stringify(activity), this.options)
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }

  deleteActivity(id: number): Promise<void> {
    const url = `${this.activityUrl}/${id}`;
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