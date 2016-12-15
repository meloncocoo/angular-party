import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ConsoleRoutingModule }   from './console-routing.module';
import { ConsoleComponent }       from './console.component';
import { ConsoleService }          from './console.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConsoleRoutingModule
  ],
  exports: [],
  declarations: [ ConsoleComponent ],
  providers: [ ConsoleService ],
})
export class ConsoleModule { }
