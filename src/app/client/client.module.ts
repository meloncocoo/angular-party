import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { ClientRoutingModule } from './client-routing.module';

import { ClientComponent }   from './client.component';
import { WelcomeComponent }   from './welcome.component';

import { ClientService } from './client.service';

@NgModule({
  imports: [ CoreModule, SharedModule, ClientRoutingModule ],
  exports: [],
  declarations: [ClientComponent, WelcomeComponent],
  providers: [ ClientService ],
})
export class ClientModule { }
