import { NgModule } from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { CoreModule }         from '../core/core.module';
import { SharedModule }       from '../shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent }     from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    CoreModule,
    SharedModule,
    AdminRoutingModule
  ],
  exports: [],
  declarations: [AdminComponent],
  providers: [],
})
export class AdminModule { }
