import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions }  from '@angular/http';

export class Activity {
  constructor(
    public id?: number,
    public name?: string,
    public parts?: number
  ) { }
}

export class QrCode {
  constructor(
    public activityId?: number,
    public url?: string
  ) { }
}

export class User {
  constructor(
    public name?: string,
    public headImgUrl?: string
  ) { }
}

@Injectable()
export class LiveService {
  private url = `${API}/live`;

  private headers   = new Headers({
    'Content-Type': 'application/json'
  });

  private options = new ResponseOptions({ headers: this.headers });

  constructor(private http: Http) { }

  getQrCode(id: number): Promise<QrCode> {
    const url = `${this.url}/QrCode?activityId=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as QrCode)
      .catch(this.handleError);
  }

  getActivity(id: number): Promise<Activity> {
    const url = `${this.url}/activity?activityId=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Activity)
      .catch(this.handleError);
    
  }

  getUsers(id: number): Promise<User[]> {
    const url = `${this.url}/users?activityId=${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
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
