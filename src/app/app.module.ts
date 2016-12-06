import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

/* App Root */
import { AppComponent }         from './app.component';
// import { LiveComponent }        from './live/live.component';

/* Routing Module */
import { AppRoutingModule }     from './app-routing.module';

/* Feature Modules */
// import { ContactModule }      from './contact/contact.module';
// import { HeroModule }         from './hero/hero.module';
import { AdminModule }        from './admin/admin.module';
import { LiveModule }         from './live/live.module';

@NgModule({
  imports: [
    BrowserModule,
    // CoreModule, // .forRoot({userName: 'Miss Marple'}),
    // HeroModule,
    // ContactModule,
    AdminModule,
    LiveModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent/*, LiveComponent*/ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }