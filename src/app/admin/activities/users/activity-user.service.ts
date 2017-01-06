import { Injectable } from '@angular/core';
import { Headers, Http, Response, ResponseOptions }  from '@angular/http';

export class User {
  constructor(
    public id: number,
    public name: string,
    public headImgUrl?: string,
    public checkInDate?: string
  ) { }
}

const USERS: User[] = [
  new User(1, '冬瓜oO'),
  new User(2, '活动测试')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ActivityUserService {
  private activityUrl = `${API}/activity`;

  getUsers(activityId: number) {
    const url = `${this.activityUrl}/${activityId}/users`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as User[])
      .catch(this.handleError);
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }
}