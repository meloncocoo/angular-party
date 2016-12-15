import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveComponent } from './live.component';

const routes: Routes = [
  { path: 'path', component: LiveComponent },
];

@NgModule({
  imports: [ RouterModule.forChild([
    { path: '', redirectTo: 'live', pathMatch: 'full' },
    { path: 'live', component: LiveComponent }
  ])],
  exports: [ RouterModule ],
})
export class LiveRoutingModule { }