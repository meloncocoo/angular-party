import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsoleComponent }     from './console/console.component';

const routes: Routes = [
  { path: '', redirectTo: 'activities', pathMatch: 'full' },
  { path: 'console',    component: ConsoleComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
