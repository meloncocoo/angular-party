import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { ActivitiesComponent }      from './activities.component';
import { ActivityAddComponent }     from './activity/activity-add.component';
import { ActivityDetailComponent }  from './activity/activity-detail.component';
import { ActivityUsersComponent }   from './users/activity-users.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'activities',             component: ActivitiesComponent },
    { path: 'activity/add',           component: ActivityAddComponent },
    { path: 'activity/detail/:id',    component: ActivityDetailComponent },
    { path: 'activity/users/:id',     component: ActivityUsersComponent }
  ])],
  exports: [RouterModule]
})
export class ActivitiesRoutingModule {}
