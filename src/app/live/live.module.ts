import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { LiveRoutingModule }  from './live-routing.module';

import { LiveComponent }      from './live.component';
import { LiveStyleDirective } from './style.directive';

import { SocketService }      from '../shared/socket.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LiveRoutingModule
  ],
  exports: [ ],
  declarations: [
    LiveComponent,
    LiveStyleDirective
  ],
  providers: [ SocketService ]
})
export class LiveModule { }