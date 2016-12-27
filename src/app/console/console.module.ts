import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { SharedModule }           from '../shared/shared.module';
import { ConsoleRoutingModule }   from './console-routing.module';
import { ConsoleComponent }       from './console.component';
import { ScheduleComponent }      from './schedule.component';
import { ScreenComponent }        from './screen.component';
import { ConsoleService }         from './console.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    ConsoleRoutingModule
  ],
  exports: [],
  declarations: [ ConsoleComponent, ScheduleComponent, ScreenComponent ],
  providers: [ ConsoleService ],
})
export class ConsoleModule { }
