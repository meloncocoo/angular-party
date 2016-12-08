import { NgModule } from '@angular/core';
import { CommonModule }         from '@angular/common';
import { FormsModule }          from '@angular/forms';
import { AppRoutingModule }     from './app-routing.module';

import { StatusDirective }    from './status.directive';

import { BoxComponent }       from './box.component';
import { ScheduleComponent }  from './schedule.component';

@NgModule({
  imports: [ CommonModule, AppRoutingModule ],
  exports: [
    CommonModule, FormsModule,
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
export class ActivityStatusModule { }
