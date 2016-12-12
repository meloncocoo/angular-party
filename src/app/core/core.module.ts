import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { RouterModule }       from '@angular/router';
import { FormsModule }        from '@angular/forms';
import { HttpModule }         from '@angular/http';

import { Ng2MaskModule }      from 'ng2-mask';
import { Ng2Bs3ModalModule }  from 'ng2-bs3-modal/ng2-bs3-modal';

// Imports for loading & configuring the in-memory web api
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
//import { InMemoryDataService }  from '../in-memory-data.service';

import { TitleComponent }       from './title.component';
import { Logger }               from './logger.service';
import { UserService }          from './user.service';

@NgModule({
  imports:      [
    Ng2MaskModule,
    Ng2Bs3ModalModule,
    CommonModule,
    RouterModule,
    FormsModule,
    HttpModule/*,
    InMemoryWebApiModule.forRoot(InMemoryDataService)*/
  ],
  declarations: [ TitleComponent ],
  exports:      [
    CommonModule,
    RouterModule,
    Ng2MaskModule,
    Ng2Bs3ModalModule,
    TitleComponent
  ],
  providers:    [ Logger, UserService ]
})
export class CoreModule { }
