import { Injectable } from '@angular/core';

export class User {
  constructor(
    public id: number,
    public name: string
  ) { }
}

const USERS: User[] = [
  new User(1, '冬瓜oO'),
  new User(2, '活动测试')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ActivityUserService {
  getUsers() {
    return new Promise<User[]>(resolve => {
      setTimeout(() => { resolve(USERS); }, FETCH_LATENCY);
    });
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id));
  }
}