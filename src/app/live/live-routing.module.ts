import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveComponent } from './live.component';
import { CheckInComponent } from './check-in.component';

const routes: Routes = [
  { path: 'path', component: LiveComponent },
];

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', redirectTo: 'live', pathMatch: 'full' },
    { path: 'live', component: LiveComponent },
    { path: 'check-in', component: CheckInComponent }
  ])],
  exports: [ RouterModule ],
})
export class LiveRoutingModule { }