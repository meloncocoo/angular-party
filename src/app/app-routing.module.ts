import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LiveComponent }        from './live/live.component';
import { ConsoleComponent }     from './console/console.component';

const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: 'live',       component: LiveComponent },
  { path: 'console',    component: ConsoleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
