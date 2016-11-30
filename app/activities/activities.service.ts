import { Injectable } from '@angular/core';

export class Activity {
  constructor(
    public id: number,
    public name: string,
    public desc: string,
    public count: number,
    public date: string,
    public status: string
  ) { }
}

const ACTIVITIES: Activity[] = [
  new Activity(1, '2016 年会', '年会活动', 10, '2016/12/12', '已发布'),
  new Activity(2, '活动测试', '这是一个测试活动', 5, '2016/11/12', '未发布')
];

const FETCH_LATENCY = 500;

@Injectable()
export class ActivitiesService {
  getActivities() {
    return new Promise<Activity[]>(resolve => {
      setTimeout(() => { resolve(ACTIVITIES); }, FETCH_LATENCY);
    });
  }

  getActivity(id: number): Promise<Activity> {
    return this.getActivities()
      .then(activities => activities.find(activity => activity.id === id));
  }
}