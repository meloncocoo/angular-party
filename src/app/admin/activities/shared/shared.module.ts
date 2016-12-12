import { NgModule } from '@angular/core';

import { CoreModule }         from '../../../core/core.module';
import { SharedModule }       from '../../../shared/shared.module';
import { ScheduleModule }     from '../schedule/schedule.module';

import { StatusDirective }    from './status.directive';

import { BoxComponent }       from './box.component';
import { ScheduleComponent }  from './schedule.component';

import { ScheduleService }    from '../schedule.service';


@NgModule({
  imports: [ CoreModule, SharedModule, ScheduleModule ],
  exports: [
    BoxComponent,
    ScheduleComponent,
    StatusDirective
  ],
  declarations: [
    BoxComponent,
    ScheduleComponent,
    StatusDirective
  ],
  providers: [
    ScheduleService
  ]
})
export class ActivitySharedModule { }
