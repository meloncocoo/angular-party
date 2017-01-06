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
import { ConsoleModule }      from './console/console.module';
import { ClientModule }       from './client/client.module';

@NgModule({
  imports: [
    BrowserModule,
    // CoreModule, // .forRoot({userName: 'Miss Marple'}),
    // HeroModule,
    // ContactModule,
    AdminModule,
    LiveModule,
    ConsoleModule,
    ClientModule,
    AppRoutingModule
  ],
  declarations: [ AppComponent/*, LiveComponent*/ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
