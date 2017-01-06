import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent }   from './client.component';
import { WelcomeComponent }   from './welcome.component';

@NgModule({
  imports: [ CoreModule, SharedModule, ClientRoutingModule ],
  exports: [],
  declarations: [ClientComponent, WelcomeComponent],
  providers: [],
})
export class ClientModule { }
