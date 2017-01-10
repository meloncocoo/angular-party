import { NgModule }           from '@angular/core';
import { CoreModule }         from '../core/core.module';
import { SharedModule }       from '../shared/shared.module';

import { LiveRoutingModule }  from './live-routing.module';

import { LiveComponent }      from './live.component';
import { CheckInComponent }   from './check-in.component';
import { LotteryComponent }   from './lottery.component';

import { SocketService }      from '../shared/socket.service';
import { LiveService }        from './live.service';


@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    LiveRoutingModule
  ],
  exports: [ ],
  declarations: [
    LiveComponent,
    CheckInComponent,
    LotteryComponent
  ],
  providers: [ SocketService, LiveService ]
})
export class LiveModule { }