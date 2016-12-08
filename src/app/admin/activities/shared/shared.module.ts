import { NgModule } from '@angular/core';

import { CoreModule }         from '../../../core/core.module';
import { SharedModule }       from '../../../shared/shared.module';

import { StatusDirective }    from './status.directive';

import { BoxComponent }       from './box.component';
import { ScheduleComponent }  from './schedule.component';

@NgModule({
  imports: [ CoreModule, SharedModule ],
  exports: [
    BoxComponent,
    ScheduleComponent,
    StatusDirective
  ],
  declarations: [
    BoxComponent,
    ScheduleComponent,
    StatusDirective
  ]
})
export class ActivitySharedModule { }
