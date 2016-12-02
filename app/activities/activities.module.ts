import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SharedModule }             from '../shared/shared.module';

import { ActivitiesRoutingModule }  from './activities-routing.module';
import { ActivitiesComponent }      from './activities.component';
import { ActivityAddComponent }     from './activity/activity-add.component';
import { ActivityDetailComponent }  from './activity/activity-detail.component';
import { BoxComponent }             from './box.component';
import { ActivityUsersComponent }   from './users/activity-users.component';
import { ActivitiesService }        from './activities.service';

@NgModule({
  imports:        [ CommonModule, FormsModule, SharedModule, ActivitiesRoutingModule ],
  declarations:   [
    ActivitiesComponent,
    ActivityAddComponent,
    ActivityDetailComponent,
    BoxComponent,
    ActivityUsersComponent
  ],
  providers:      [ ActivitiesService ]
})
export class ActivitiesModule { }
