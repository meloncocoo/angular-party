import { NgModule } from '@angular/core';

import { CoreModule }         from '../../../core/core.module';
import { SharedModule }       from '../../../shared/shared.module';

import { NormalScheduleComponent }   from './normal.component';

@NgModule({
  imports: [ CoreModule, SharedModule ],
  exports: [],
  declarations: [ NormalScheduleComponent ],
  providers: [],
})
export class ScheduleModule { }
