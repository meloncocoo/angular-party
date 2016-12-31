import { NgModule }           from '@angular/core';
import { CoreModule }         from '../core/core.module';

import { LiveRoutingModule }  from './live-routing.module';

import { LiveComponent }      from './live.component';
import { CheckInComponent }   from './check-in.component';

import { LiveStyleDirective } from './style.directive';
import { SocketService }      from '../shared/socket.service';
import { LiveService }        from './live.service';


@NgModule({
  imports: [
    CoreModule,
    LiveRoutingModule
  ],
  exports: [ ],
  declarations: [
    LiveComponent,
    CheckInComponent,
    LiveStyleDirective
  ],
  providers: [ SocketService, LiveService ]
})
export class LiveModule { }