import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SharedModule }             from '../../shared/shared.module';
import { ActivityStatusModule }     from './shared/shared.module';

import { ActivitiesRoutingModule }  from './activities-routing.module';
import { ActivitiesComponent }      from './activities.component';
import { ActivityAddComponent }     from './activity/activity-add.component';
import { ActivityFormimplements }   from './activity/activity-form.component';
import { ActivityDetailComponent }  from './activity/activity-detail.component';
import { BoxComponent }             from './box.component';
import { ActivityUsersComponent }   from './users/activity-users.component';
import { ActivitiesService }        from './activities.service';

@NgModule({
  imports:        [
    CommonModule,
    FormsModule,
    SharedModule,
    ActivityStatusModule,
    ActivitiesRoutingModule
  ],
  declarations:   [
    ActivitiesComponent,
    ActivityAddComponent,
    ActivityFormimplements,
    ActivityDetailComponent,
    BoxComponent,
    ActivityUsersComponent
  ],
  providers:      [ ActivitiesService ]
})
export class ActivitiesModule { }