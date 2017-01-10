import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveComponent } from './live.component';
import { CheckInComponent } from './check-in.component';
import { LotteryComponent } from './lottery.component';

const routes: Routes = [
    { path: '', redirectTo: 'live', pathMatch: 'full' },
    { path: 'live/:id', component: LiveComponent,
      children: [
        { path: 'check-in', component: CheckInComponent },
        { path: 'lottery', component: LotteryComponent }
      ]
    }
  ];

@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ],
})
export class LiveRoutingModule { }