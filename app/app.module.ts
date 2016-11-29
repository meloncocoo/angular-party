import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }         from './app.component';

/* Routing Module */
import { AppRoutingModule }     from './app-routing.module';

/* Feature Modules */
import { CoreModule }         from './core/core.module';
import { ContactModule }      from './contact/contact.module';
import { HeroModule }         from './hero/hero.module';
import { ActivityModule }     from './activity/activity.module';

import './rxjs-extensions';

@NgModule({
  imports: [
    BrowserModule,
    CoreModule, // .forRoot({userName: 'Miss Marple'}),
    HeroModule,
    ContactModule,
    ActivityModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
