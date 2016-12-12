import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { Ng2MaskModule }      from 'ng2-mask';

import { SharedModule }             from '../../shared/shared.module';
import { ActivitySharedModule }     from './shared/shared.module';

import { ActivitiesRoutingModule }  from './activities-routing.module';
import { ActivitiesComponent }      from './activities.component';
import { ActivityAddComponent }     from './activity/activity-add.component';
import { ActivityFormimplements }   from './activity/activity-form.component';
import { ActivityDetailComponent }  from './activity/activity-detail.component';
import { ActivityUsersComponent }   from './users/activity-users.component';
import { ActivitiesService }        from './activities.service';
import { ScheduleService }          from './schedule.service';

@NgModule({
  imports:        [
    CommonModule,
    FormsModule,
    Ng2MaskModule,
    SharedModule,
    ActivitySharedModule,
    ActivitiesRoutingModule
  ],
  declarations:   [
    ActivitiesComponent,
    ActivityAddComponent,
    ActivityFormimplements,
    ActivityDetailComponent,
    ActivityUsersComponent
  ],
  providers:      [ ActivitiesService ]
})
export class ActivitiesModule { }
