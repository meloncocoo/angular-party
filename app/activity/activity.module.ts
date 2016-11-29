import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SharedModule }           from '../shared/shared.module';

import { ActivityRoutingModule }    from './activity-routing.module';
import { ActivityComponent }        from './activity.component';
import { ActivityDetailComponent }  from './activity-detail.component';
import { BoxComponent }             from './box.component';
import { ActivityUsersComponent }   from './activity-users.component';
import { ActivityService }          from './activity.service';

@NgModule({
  imports:        [ CommonModule, FormsModule, SharedModule, ActivityRoutingModule ],
  declarations:   [
    ActivityComponent,
    ActivityDetailComponent,
    BoxComponent,
    ActivityUsersComponent
  ],
  providers:      [ ActivityService ]
})
export class ActivityModule { }
