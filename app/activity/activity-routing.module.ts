import { NgModule }             from '@angular/core';
import { RouterModule }         from '@angular/router';

import { ActivityComponent }        from './activity.component';
import { ActivityDetailComponent }  from './activity-detail.component';
import { ActivityUsersComponent }   from './activity-users.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'activity',               component: ActivityComponent },
    { path: 'activity/detail/:id',    component: ActivityDetailComponent },
    { path: 'activity/users/:id',     component: ActivityUsersComponent }
  ])],
  exports: [RouterModule]
})
export class ActivityRoutingModule {}
